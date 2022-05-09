import React from 'react';
import * as THREE from 'three';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader';
import { sideW, canvasH, contentW, cabinetArr, cabWoodArr } from '../common/info';
import { GetBoxMesh, SetWallSize, SetWallMat, GetObjKey, SetCabinetSize, SetSameMat } from '../common/model';

const renderId='render2d', thick=0.1;
export default class CanvasComponent extends React.Component {
	constructor(props) {
		super(props);
		this.modelArr = []; this.overHotMesh = null; this.meshArr = [];
		this.raycaster = new THREE.Raycaster(); this.mouse = new THREE.Vector2(); this.extHotWidth = 70;
		const {pageKey, selRoom, selStep, selSize} = props;
		this.state = {pageKey, selRoom, selStep, selSize};
	}

	componentDidMount() {
		this.setCanvasSize();
		this.initScene();
		this.addRoom();
		this.setRoomSize();
		this.loadModel();
		this.animate();
		window.addEventListener('resize', this.setCanvasSize);
		document.getElementById(renderId).addEventListener('mousemove', this.onMouseMove);
		document.getElementById(renderId).addEventListener('click', this.onClickWindow);
		document.getElementById(renderId).addEventListener('touchend', this.onClickWindow);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		['pageKey', 'selStep', 'selRoom', 'addKey', 'selBodyCol', 'selDoorCol', 'selBodyWood', 'selDoorWood', 'selCabSize'].forEach(key => {
			if (this.state[key] !== nextProps[key]) {
				this.setState({[key]:nextProps[key]}, ()=> {
					if (key==='addKey') {
						if (this.state.addKey) this.addCabinet(); 
					} else if ((key==='selBodyCol' || key==='selDoorCol') && this.selObj && this.state[key]) this.setCabColor(key.substring(3, 7).toLowerCase(), key);
					else if ((key==='selBodyWood' || key==='selDoorWood') && this.selObj && this.state[key]) this.setCabWood(key.substring(3, 7).toLowerCase(), key);
					else if (key==='selCabSize' && this.state.selCabSize) {this.selObj.selCabSize = this.state.selCabSize; SetCabinetSize(this.selObj);}
				});
			}
		});
		if (this.selObj && this.state.selCabSize) {this.selObj.selCabSize = this.state.selCabSize; SetCabinetSize(this.selObj);}
		this.setRoomSize();
	}

	setCabWood = (part, key) => {
		const selWoodImg = cabWoodArr.find(item=>item.key===this.state[key]);
		const selWoodMap = new THREE.TextureLoader().load(selWoodImg.img);
		selWoodMap.wrapS = selWoodMap.wrapT = THREE.RepeatWrapping;
		// selWoodMap.repeat.set( 1, 1 );
		this.selObj.traverse(child=>{
			if (child instanceof THREE.Mesh && child.name.includes(part) ) {
				child.material.map = selWoodMap;
				child.material.needsUpdate = true;
			}
		})
	}

	setCabColor = (part, key) => {
		this.selObj.traverse(child=> {
			if (child instanceof THREE.Mesh && child.name.includes(part) ) { // child.name.includes('door')
				child.material.color.setHex(this.state[key]);
			}
		})
	}

	onClickWindow = (e) => {
		const interHot = this.getHotObject(e);
		if (!interHot) {this.props.setSelModelKey(null); return;}
		const {objKey} = interHot.object;
		this.selObj = this.totalGroup.children.find(child=>child.objKey===objKey);
		this.props.setSelModelKey(this.selObj.modelKey, this.selObj.selCabSize);
		// this.overHotMesh = interHot?interHot.object:null;
	}

	onMouseMove = (e) => {
		// if (this.controlChange) return;
		// const interHot = this.getHotObject(e);
		// if (interHot) {
		// 	jQuery('#'+renderId).css({cursor:'pointer'});
		// 	const {object} = interHot;
		// 	this.overHotMesh = object;
		// } else {
		// 	jQuery('#'+renderId).css({cursor:'default'});
		// 	if (this.overHotMesh) this.closeHotOver();
		// }
	}

	getHotObject = (e) => {
		const container = document.getElementById("container");
		const rect = container.getBoundingClientRect();
		const cTop = rect.top, cLeft = rect.left;
		const posX = e.clientX, posY = e.clientY;
		this.mouse.x = ( (posX - cLeft) / this.cWidth ) * 2 - 1;
		this.mouse.y = - ( (posY - cTop) / this.cHeight ) * 2 + 1;
		this.raycaster.setFromCamera( this.mouse, this.camera );
		return this.raycaster.intersectObjects( this.meshArr )[0];
	}

	// addRender2d = (meshArr) => {
	// 	meshArr.forEach(meshItem => {
			
	// 	});
	// }

	initScene = () => {
		this.renderer = new THREE.WebGLRenderer({antialias:true});
		this.renderer.setSize(this.cWidth, this.cHeight);
		if (!document.getElementById("container")) return false;
		document.getElementById("container").appendChild(this.renderer.domElement);

		this.renderer.setClearColor(0xF5F5F5, 1);

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(60, this.cWidth / this.cHeight, 0.01, 100);
		this.camera.position.set(4, 3, 2.5);
		
		this.totalGroup = new THREE.Group(); this.scene.add(this.totalGroup);
		this.roomGroup = new THREE.Group(); this.totalGroup.add(this.roomGroup);

		this.render2d = new CSS2DRenderer();
		this.render2d.setSize( this.cWidth, this.cHeight );
		this.render2d.domElement.id=renderId;
		const render2d = document.getElementById('render2dWrapper');
		render2d.appendChild( this.render2d.domElement );

		this.controls = new OrbitControls(this.camera, this.render2d.domElement); // render2d.domElement // this.controls.enableZoom = false;
		this.controls.addEventListener('start', () => { this.controlChange = true; });
		this.controls.addEventListener('end', () => this.controlChange = false);
		this.controls.enablePan = false; // this.controls.enableZoom = false;
		this.controls.minPolarAngle = 0.3; this.controls.maxPolarAngle = Math.PI / 2 + 0.1;

		this.ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.4); this.scene.add(this.ambientLight);
		this.mainLight = new THREE.DirectionalLight(0xFFFFFF, 0.7); this.scene.add(this.mainLight); this.mainLight.position.set(4, 3, 2.5);
	}

	addRoom = () => {
		[{dir:{x: 0, z:-1}, key:'front'}, {dir:{x:0, z:1}, key:'front'}, 
		 {dir:{x:-1, z: 0}, key:'side'}, {dir:{x: 1, z:0}, key:'side'}, {key:'bottom'} ].forEach(item => {
			const roomMesh = GetBoxMesh(); roomMesh.dir = item.dir; roomMesh.meshKey = item.key;
			this.roomGroup.add(roomMesh);
		});
	}

	setRoomSize = () => {
		const {selSize} = this.state;
		this.roomGroup.children.forEach(wall => {
			SetWallSize(wall, selSize, thick)
		});
		this.totalGroup.position.y = selSize.h / -2;
		SetWallMat(this.roomGroup, this.camera.position);
	}

	addCabinet = () => {
		const {selSize, addKey} = this.state;
		const selCabinet = this.modelArr.find(obj=>obj.modelKey===addKey), cN = this.totalGroup.children.length - 1, rN = Math.round(selSize.w);
		const cloneModel = selCabinet.clone(), posX = (cN%rN) + 0.5 - selSize.w/2, posZ = Math.floor(cN/rN) - selSize.d/2;
		cloneModel.objKey = GetObjKey(); cloneModel.modelKey = addKey; cloneModel.position.set(posX, 0, posZ);
		cloneModel.pos = selCabinet.pos;
		cloneModel.traverse(child=> {
			if (child instanceof THREE.Mesh) {
				// const {color, map} = child.material;
				// child.material = new THREE.MeshStandardMaterial({color:0xCCCCCC, map, side:2, color});
				child.objKey = cloneModel.objKey; this.meshArr.push(child);
			}
		})
		if (cloneModel.pos !== 'electric') {
			cloneModel.sizeOld = selCabinet.sizeOld; cloneModel.sizeArr = selCabinet.sizeArr;
			cloneModel.selCabSize = {x:cloneModel.sizeArr.x[0], y:cloneModel.sizeArr.y[0], z:cloneModel.sizeArr.z[0]}
			SetCabinetSize(cloneModel);
		}
		this.totalGroup.add(cloneModel);
		this.props.deleteAddKey();
	}

	loadModel = () => {
		var loadedCount = 0;
		cabinetArr.forEach(item => {
			const modelDir = item.pos==='electric'?'electric/':'cabinet/custom_';
			new FBXLoader().load( './'+modelDir + item.key+'.fbx', (object) => {
				const vPos = new THREE.Box3(new THREE.Vector3()).setFromObject(object);
				object.traverse(child=>{ if (child instanceof THREE.Mesh) {
					if (item.pos==='electric') {
						child.material = SetSameMat(child.material);
						// if (child.material.length) child.material.forEach(mat => { mat.side = 0; });
						// else child.material.side = 0;
					}
					else child.material = new THREE.MeshStandardMaterial({color:0xCCCCCC, side:2});
				} })
				// object.children.forEach(child => {
				// 	child.position.y -= vPos.min.y;
				// 	child.position.z -= vPos.min.z;
				// });
				const sizeOld = {x:vPos.max.x - vPos.min.x, y:vPos.max.y - vPos.min.y, z:vPos.max.z - vPos.min.z};
				// const scl = 0.8/sizeOld.y, dX = sizeOld.x * scl, dZ = sizeOld.z * scl; console.log(dX, dZ);
				if (item.pos==='electric') {
					const scl = item.h/(sizeOld.y * 100); object.scale.set(scl, scl, scl);
				} else {
					object.sizeOld = sizeOld; object.sizeArr = item.sizeArr;
				}
				object.modelKey = item.key;
				object.pos = item.pos;
				this.modelArr.push(object);
				loadedCount++;
				this.props.setLoading(true, Math.round(loadedCount/cabinetArr.length * 100));
				if (loadedCount===cabinetArr.length) setTimeout(() => { this.props.setLoading(false); }, 500);
			}, (xhr) => { }, (error) => { console.log(error); } );
		});
	}

	setCanvasSize = () => {
		this.cWidth = contentW - sideW;
		this.cHeight = canvasH;
		if (this.renderer && this.camera) {
			this.renderer.setSize(this.cWidth, this.cHeight);
			this.render2d.setSize(this.cWidth, this.cHeight);
			this.camera.aspect = this.cWidth/this.cHeight;
			this.camera.updateProjectionMatrix();
		}
	}

	animate=()=>{
		if (!this.camera || !this.scene) return;
		requestAnimationFrame(this.animate);
		this.camera.lookAt( 0, 0, 0 );
		this.renderer.render(this.scene, this.camera);
		this.render2d.render(this.scene, this.camera);
		// this.camera.updateProjectionMatrix();
		if (this.controlChange) {
			const camPos = this.camera.position;
			this.mainLight.position.set(camPos.x, camPos.y, camPos.z);
			SetWallMat(this.roomGroup, this.camera.position);
		}
	}

	render() {
		const {pageKey} = this.state;
		return (
			<div className={`canvas ${pageKey==='canvas'?'active':''}`}>
				<div id='container' className='canvas'></div>
				<div className='render-2d' id='render2dWrapper'></div>
			</div>
		);
	}
}
