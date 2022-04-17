import React from 'react';
import axios from 'axios';
import { histArr, stepArr, cabinetArr } from '../common/info';

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
					{(selStep==='style' || selStep==='area') &&
						<div className='slider' style={{width:histArr.length * 400 + 'px'}}>
							{histArr.map((item, idx) => // selStep=='style' && 
								<div className={`item hist-item ${selRoom===item.key?'active':''}`} key={idx}>
									<div className='hist-name'>{item.title}</div>
									<div className='thumb hist-thumb flex'>
										<img src={item.img}></img>
									</div>
								</div>
							) }
						</div>
					}
					{selStep==='design' &&
						<div className='slider' style={{width:cabinetArr.length * 600 + 'px'}}>
							{cabinetArr.map((item, idx) => // selStep=='style' && 
								<div className={`item cabinet-item `} key={idx}>
									<div className='item-part'>
										<div className='cabinet-name'>{item.title}</div>
										<div className='thumb cabinet-thumb flex'>
											<img src={`./cabinet/custom_${item.key}.jpg`}></img>
										</div>
									</div>
									<div className='item-part'>
										<div className='cabinet-sub-name'>{item.subTitle}</div>
										<div className='cabinet-detail'>
											<div className='detail-info'><label className='label'>Sku</label><label className='value'>{item.sku}</label></div>
											<div className='detail-info'><label className='label'>Proveedor</label><label className='value'>{item.provider}</label></div>
											<div className='detail-info'><label className='label'>Marca</label><label className='value'>{item.brand}</label></div>
											<div className='detail-info'><label className='label'>Precio</label><label className='value'>{item.price}</label></div>
											<div className='detail-info'><label className='label'>Stock</label><label className='value'>{item.stock}</label></div>
										</div>
										<div className='button cabinet-button' onClick={()=>this.props.addCabinet(item.key)}>CAMBIAR</div>
									</div>
								</div>
							) }
						</div>
					}
				</div>
			</div>
		);
	}
}
// Sku
// Proveedor
// Marca
// Precio
// Stock

// CAMBIAR