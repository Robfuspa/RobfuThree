import React from 'react';
import axios from 'axios';
import { roomTypeArr, sideW, canvasH, stepArr } from '../common/info';

export default class SideComponent extends React.Component {
	constructor(props) {
		super(props);
		const {pageKey, selStep, selRoom, selSize} = props;
		this.state = {pageKey, selStep, selStepInfo:stepArr[0]};
	}

	componentDidMount() {
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		['pageKey', 'selStep', 'selRoom', 'selSize'].forEach(key => {
			if (this.state[key] !== nextProps[key]) {
				this.setState({[key]:nextProps[key]}, () => {
					if (key==='selStep') {
						const selStepInfo = stepArr.find(item=>item.key===this.state.selStep);
						this.setState({selStepInfo});
					}
				});
			}
		});
	}

	onClickSize = () => {

	}

	changeSize = (e, key) => {
		var {selSize} = this.state, val = parseInt(e.target.value)/100;
		selSize[key] = val;
		this.props.setSelSize(selSize);
	}

	render() {
		const {pageKey, selStep, selRoom, selStepInfo, selSize} = this.state;
		return (
			<div className={`content-side`} style={{width:sideW+'px', height:canvasH+'px'}}>
				<div className='side-wrapper'>
					<div className='side-title'>
						<div className='main-label'>{selStepInfo.sideTitle}</div> {/* choose style */}
						<div className='sub-label'>{selStepInfo.sideDes}</div>
					</div>
					{selStep=='style' &&
						<div className='room-list scroll scroll-y'>
							{roomTypeArr.map((item, idx) =>
								<div className={`room-item ${selRoom===item.key?'active':''}`} key={idx}>
									<div className='room-name'>{item.title}</div>
									<div className='room-thumb flex'>
										<img src={item.img}></img>
									</div>
									<div className='buttons'>
										<div className='button'>Ver más</div> {/* see more */}
										<div className='button'>seleccionar</div> {/* select */}
									</div>
								</div>
							) }
						</div>
					}
					{selStep==='area' &&
						<div className='room-size'>
							{[{key:'w', label:'ANCHO'}, {key:'d', label:'PROFUNDIDAD'}, {key:'h', label:'ALTO MUROS'}].map((item, idx) =>
								<div className='size-item' key={idx}>
									<div className='label'>{item.label}</div>
									<input min={200} max={item.key==='h'?500:1000} value={Math.round(selSize[item.key]*100)} type='number' onChange={(e)=>this.changeSize(e, item.key)}></input>
									<div className='unit'>cm</div>
								</div>
							) }
							<div className='button' onClick={this.onClickSize}>CONTINUAR</div>
						</div>
					}
					{selStep==='design' &&
						<div className='cabinet-list'>
							
						</div>
					}
				</div>
			</div>
		);
	}
}
