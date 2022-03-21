
import * as THREE from 'three';
import imgWood from '../../images/wood0.jpg';

const mapWood = new THREE.TextureLoader().load(imgWood);
mapWood.wrapS = mapWood.wrapT = THREE.RepeatWrapping;

export function GetBoxMesh() {
	const boxGeo = new THREE.BoxGeometry();
	const boxMat = new THREE.MeshStandardMaterial({side:2, color:0xEEEEEE});
	const boxMesh = new THREE.Mesh(boxGeo, boxMat);
	// const object3D = new THREE.Object3D();
	// object3D.add(boxMesh);
	return boxMesh;
}

export function SetWallSize( wall, roomSize, thick) {
	if (wall.meshKey==='front') {
		wall.scale.set(roomSize.w + thick*2, roomSize.h, thick);
		wall.position.set(0, roomSize.h/2, wall.dir.z * (roomSize.d+thick)/2);
	} else if (wall.meshKey==='side') {
		wall.scale.set(thick, roomSize.h, roomSize.d);
		wall.position.set(wall.dir.x * (roomSize.w + thick)/2, roomSize.h/2, 0)
	} else if (wall.meshKey==='bottom') {
		wall.scale.set(roomSize.w+thick*2, thick, roomSize.d+thick*2);
		wall.position.set(0, thick/-2, 0);
		mapWood.repeat.set( roomSize.w/1, roomSize.d/0.2 );
		wall.material.map = mapWood;
		wall.material.needsUpdate = true;
	}
}

export function SetWallMat(roomGroup, camPos) {
	const camDis = getDis(camPos, {x:0, z:0});
	roomGroup.children.forEach((wall, idx) => {
		const wallDis = getDis(camPos, wall.position);
		if (wallDis > camDis) {
			wall.material.transparent = false;
			wall.material.opacity = 1;
		} else {
			wall.material.transparent = true;
			wall.material.opacity = 0.2;
		}
	});
}

function getDis(pos0, pos1) {
	const disX = pos0.x - pos1.x, disZ = pos0.z - pos1.z;
	return Math.sqrt(Math.pow(disX, 2) + Math.pow(disZ, 2));
}