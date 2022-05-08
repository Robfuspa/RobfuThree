
import imgTempRoom from '../../images/temp-room.jpg';
import imgWood from '../../images/wood_texture/wood.jpg';
import imgWood0 from '../../images/wood_texture/wood_0.jpg';
import imgWood1 from '../../images/wood_texture/wood_1.jpg';
import imgWood2 from '../../images/wood_texture/wood_2.jpg';
import imgWood3 from '../../images/wood_texture/wood_3.jpg';

export const sideW = 400, canvasH = window.innerHeight - 550, contentW = Math.min(window.innerWidth - 100, 1600);

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
	{key:'electric', title:'Electrics'},
]

// export const cabinetArr = [
// 	{key:'cabinet0', pos:'floor', title:'Cabinet 1', model:'cabinet_test_0', thumb:'cabinet_test_0', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:35.88, stock:150},
// ]

function getRandom(type) {
	if (type==='price') return Math.round(Math.random() * 10000)/100;
	else return Math.round(Math.random() * 1000);
}

const sW45Arr = [45, 40, 35, 30], sW60Arr = [60], sW90Arr = [90], sW80Arr = [80], sW15Arr = [20, 15];
const sHArr = [80, 75];
const sD45Arr = [58, 52, 48], sD60Arr = [55, 50];

export const cabinetArr = [
	{key:'3_drawer_Boxside_Inner', title:'3_drawer_Boxside_Inner', pos:'floor', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock'), sizeArr:{x:sW45Arr, y:sHArr, z:sD45Arr}},
	{key:'holding_rack_for_the_lower_branch_1', title:'holding_rack_for_the_lower_branch_1', pos:'floor', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock'), sizeArr:{x:sW45Arr, y:sHArr, z:sD45Arr}},
	{key:'Kitchen_cornersystem_round_rack_1', title:'Kitchen_cornersystem_round_rack_1', pos:'floor', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock'), sizeArr:{x:sW90Arr, y:sHArr, z:sW90Arr}},
	{key:'Kitchen_furnitures_down_45_cm_doors_St_1', title:'Kitchen_furnitures_down_45_cm_doors_St_1', pos:'floor', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock'), sizeArr:{x:sW45Arr, y:sHArr, z:sD45Arr}},
	{key:'Kitchen_furnitures_down_60_cm_drawers_St_1', title:'Kitchen_furnitures_down_60_cm_drawers_St_1', pos:'floor', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock'), sizeArr:{x:sW60Arr, y:sHArr, z:sD60Arr}},
	{key:'Kitchen_furnitures_down_60_cm_oven_St_1', title:'Kitchen_furnitures_down_60_cm_oven_St_1', pos:'floor', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock'), sizeArr:{x:sW60Arr, y:sHArr, z:sD60Arr}},
	{key:'Kitchen_furnitures_down_80_cm_doors_St_1', title:'Kitchen_furnitures_down_80_cm_doors_St_1', pos:'floor', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock'), sizeArr:{x:sW80Arr, y:sHArr, z:sD60Arr}},
	{key:'Kitchen_furnitures_up_45_cm_doors_vertical_St_1', title:'Kitchen_furnitures_up_45_cm_doors_vertical_St_1', pos:'floor', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock'), sizeArr:{x:sW45Arr, y:sHArr, z:sD45Arr}},
	{key:'Kitchen_Slider_Cabinet_Storages_ML003H_St_1', title:'Kitchen_Slider_Cabinet_Storages_ML003H_St_1', pos:'floor', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock'), sizeArr:{x:sW15Arr, y:sHArr, z:sD60Arr}},
	// {key:'Plate_rack_drawer_St_1', title:'Plate_rack_drawer_St_1', pos:'floor', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock')}
	{key:'Gorenje', title:'Gorenje', h:100, pos:'electric', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock')},
	{key:'KitchenSink', title:'KitchenSink', h:50, pos:'electric', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock')},
	{key:'maya2sketchfab', title:'maya2sketchfab', h:0.1, pos:'electric', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock')},
	{key:'refrigerator', title:'refrigerator', h:200, pos:'electric', subTitle:'Title test', sku:'sku0000', provider:'Provider Name', brand:'Brand 1', price:getRandom('price'), stock:getRandom('stock')},
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