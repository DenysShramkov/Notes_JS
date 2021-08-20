'use strict';

if (4 == 4) {
	console.log('OK');
} else {
	console.log('false');
}

if (4) {
	console.log('OK');
} else {
	console.log('false');
} /* можно утверждать, что if
преобразовывает любой тип данных в boolin */

const num = 50;

if (num > 50) {
	console.log('Error');
} else if (num > 100) {
	console.log('too much');
} else if (num < 50) {
	console.log('less');
} else {
	console.log('=50');
}

/* Тернальный оператор */

(num == 50) ? console.log('true') : console.log('false'); 
/* ? если код правильный, : - альтернативное условие, если код провальный */

const strickt = 100;

switch (strickt) {
	case 50:
		console.log('wrong');
		break;
	case 120:
		console.log('wrong');
		break;
	case 100:
		console.log('right');
		break;
	default:
		console.log('no answer');
		break;
}
/* !!! особенность, только строгое сравнение === !!!! */