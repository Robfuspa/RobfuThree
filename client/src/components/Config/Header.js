import React from 'react';
import axios from 'axios';
import { stepArr } from '../common/info';
import imgLogo from '../../images/logo.svg';
import imgChevron from '../../images/chevron.svg';
import imgAvatar from '../../images/avatar.png';

export default class HeaderComponent extends React.Component {
	constructor(props) {
		super(props);
		const {pageKey, selStep} = props;
		this.state = {pageKey, selStep, stepNum:0};
	}

	componentDidMount() {
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		['pageKey', 'selStep'].forEach(key => {
			if (this.state[key] !== nextProps[key]) {
				this.setState({[key]:nextProps[key]}, () => {
					if (key==='selStep') {
						const stepNum = stepArr.findIndex(item=>item.key===this.state.selStep);
						this.setState({stepNum});
					}
				});
			}
		});
	}

	onClickStep = (delta) => {
		const newStep = this.state.stepNum + delta;
		if (newStep < 0 || newStep > 3) return;
		this.props.setSelStep(stepArr[newStep].key);
	}

	render() {
		const {pageKey, selStep, stepNum} = this.state;
		return (
			<div className={`config-header flex`}>
				<div className='header-side header-logo flex'>
					<img src={imgLogo}></img>
				</div>
				<div className={`header-center flex step-${stepNum}`}>
					<img className='chevron chevron-left' src={imgChevron} onClick={()=>this.onClickStep(-1)}></img>
					{stepArr.map((item, idx) =>
						<div className={`step-item flex ${selStep===item.key?'active':''} ${idx <= stepNum?'pass':''}`} key={idx}>
							<div className='step-number flex'>{idx+1}</div>
							<div className='step-label'>{item.label}</div>
							{idx < stepArr.length - 1 && <div className='step-line'></div> }
						</div>
					) }
					<img className='chevron chevron-right' src={imgChevron} onClick={()=>this.onClickStep(1)}></img>
					
				</div>
				<div className='header-side header-user flex'>
					<img src={imgAvatar}></img>
					<label>User Name</label>
				</div>
			</div>
		);
	}
}
