
import imgTempRoom from '../../images/temp-room.jpg';
import imgWood from '../../images/wood_texture/wood.jpg';
import imgWood0 from '../../images/wood_texture/wood_0.jpg';
import imgWood1 from '../../images/wood_texture/wood_1.jpg';
import imgWood2 from '../../images/wood_texture/wood_2.jpg';
import imgWood3 from '../../images/wood_texture/wood_3.jpg';

export const sideW = 400, canvasH = window.innerHeight - 550, contentW = Math.min(window.innerWidth - 100, 1600) ;

export const stepArr = [
	{key:'style', label:'ESTILO', sideTitle:'ELIGE EL ESTILO DE COCINA', sideDes:'Elige el diseño de la cocina que quieres usar para tu proyecto'},
	{key:'area', label:'ÁREA', sideTitle:'¿QUE TAMAÑO TIENE TU COCINA?', sideDes:'Define las dimensiones del espacio.'},
	{key:'design', label:'DISEÑO', sideTitle:'Design title', sideDes:'Design sub description'},
	{key:'quote', label:'COTIZACIÓN', sideTitle:'Quote title', sideDes:'Quote sub description'},
];

export const roomTypeArr = [
	{key:'mini', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'gola', title:'COCINA GOLA', img:imgTempRoom},
	{key:'mini', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'gola', title:'COCINA GOLA', img:imgTempRoom},
	{key:'mini', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'gola', title:'COCINA GOLA', img:imgTempRoom},
	{key:'mini', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'gola', title:'COCINA GOLA', img:imgTempRoom},
	{key:'mini', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'gola', title:'COCINA GOLA', img:imgTempRoom},
];

export const histArr = [
	{key:'history0', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'history1', title:'COCINA GOLA', img:imgTempRoom},
	{key:'history0', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'history1', title:'COCINA GOLA', img:imgTempRoom},
	{key:'history0', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'history1', title:'COCINA GOLA', img:imgTempRoom},
	{key:'history0', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'history1', title:'COCINA GOLA', img:imgTempRoom},
	{key:'history0', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'history1', title:'COCINA GOLA', img:imgTempRoom},
	{key:'history0', title:'COCINA MINIMALISTA', img:imgTempRoom},
	{key:'history1', title:'COCINA GOLA', img:imgTempRoom},
];

export const posArr = [
	{key:'floor', title:'Floor Cabinet'},
	{key:'wall', title:'Wall Cabinet'},
	{key:'ceiling', title:'Ceiling Cabinet'},
]

// export const cabinetArr = [
// 	{key:'cabinet0', pos:'floor', title:'Cabinet 1', model:'cabinet_test_0', thumb:'cabinet_test_0', subTitle:'ARANCIO CANYON 835 ACABADO SEI (MATE)', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:35.88, stock:150},
// ]

export const cabinetArr = [
	{key:'3_drawer_Boxside_Inner', title:'3_drawer_Boxside_Inner', pos:'floor', subTitle:'ARANCIO CANYON 835 ACABADO SEI (MATE)', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:Math.round(Math.random() * 10000)/100, stock:Math.round(Math.random() * 1000)},
	{key:'holding_rack_for_the_lower_branch_1', title:'holding_rack_for_the_lower_branch_1', pos:'floor', subTitle:'ARANCIO CANYON 835 ACABADO SEI (MATE)', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:Math.round(Math.random() * 10000)/100, stock:Math.round(Math.random() * 1000)},
	{key:'Kitchen_cornersystem_round_rack_1', title:'Kitchen_cornersystem_round_rack_1', pos:'floor', subTitle:'ARANCIO CANYON 835 ACABADO SEI (MATE)', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:Math.round(Math.random() * 10000)/100, stock:Math.round(Math.random() * 1000)},
	{key:'Kitchen_furnitures_down_45_cm_doors_St_1', title:'Kitchen_furnitures_down_45_cm_doors_St_1', pos:'floor', subTitle:'ARANCIO CANYON 835 ACABADO SEI (MATE)', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:Math.round(Math.random() * 10000)/100, stock:Math.round(Math.random() * 1000)},
	{key:'Kitchen_furnitures_down_80_cm_doors_St_1', title:'Kitchen_furnitures_down_80_cm_doors_St_1', pos:'floor', subTitle:'ARANCIO CANYON 835 ACABADO SEI (MATE)', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:Math.round(Math.random() * 10000)/100, stock:Math.round(Math.random() * 1000)},
	{key:'Kitchen_Slider_Cabinet_Storages_ML003H_St_1', title:'Kitchen_Slider_Cabinet_Storages_ML003H_St_1', pos:'floor', subTitle:'ARANCIO CANYON 835 ACABADO SEI (MATE)', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:Math.round(Math.random() * 10000)/100, stock:Math.round(Math.random() * 1000)},
	{key:'Plate_rack_drawer_St_1', title:'Plate_rack_drawer_St_1', pos:'floor', subTitle:'ARANCIO CANYON 835 ACABADO SEI (MATE)', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:Math.round(Math.random() * 10000)/100, stock:Math.round(Math.random() * 1000)}
];

export const cabColArr = [
	{hex:0x663300, str:'#663300'},
	{hex:0x999999, str:'#999999'},
	{hex:0x00FFFF, str:'#00FFFF'},
	{hex:0xFFFF00, str:'#FFFF00'},
	{hex:0x111111, str:'#111111'},
	{hex:0xFF9966, str:'#FF9966'},
]

export const cabWoodArr = [
	{key:'wood', img:imgWood},
	{key:'wood0', img:imgWood0},
	{key:'wood1', img:imgWood1},
	{key:'wood2', img:imgWood2},
	{key:'wood3', img:imgWood3},
]