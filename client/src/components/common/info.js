
import imgTempRoom from '../../images/temp-room.jpg';

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
