import React from 'react';
import axios from 'axios';
import { histArr } from '../common/info';

export default class BottomComponent extends React.Component {
	constructor(props) {
		super(props);
		const {pageKey, selStep, selRoom} = props;
		this.state = {pageKey, selStep, selRoom};
	}

	componentDidMount() {
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		['pageKey', 'selStep', 'selRoom'].forEach(key => {
			if (this.state[key] !== nextProps[key]) {
				this.setState({[key]:nextProps[key]});
			}
		});
	}

	render() {
		const {pageKey, selStep, selRoom} = this.state;
		return (
			<div className={`bottom-part`}>
                <div className='bottom-title'>HISTORIAL DEL PROYECTO</div>
				<div className='slider-wrapper scroll scroll-x'>
					<div className='slider' style={{width:histArr.length * 400 + 'px'}}>
						{histArr.map((item, idx) => // selStep=='style' && 
							<div className={`hist-item ${selRoom===item.key?'active':''}`} key={idx}>
								<div className='hist-name'>{item.title}</div>
								<div className='hist-thumb flex'>
									<img src={item.img}></img>
								</div>
							</div>
						) }
					</div>
				</div>
			</div>
		);
	}
}
