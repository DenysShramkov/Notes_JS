'use strict';

function showFirstMassage() {
	console.log('Hello world!');
}

showFirstMassage();

let numGlobal = 20; /* Глобальная переменная */
function showMyMassage(text) {
	console.log(text);
	let num = 20; /* Локальная функция существует внутри неё */
	numGlobal = 10;
	/* let numBlobal = 10; тогда переменная будет локальной */
	console.log(numGlobal); /* сначала ищет переменную внутри себя */
}

showMyMassage('Hello world!');

/* console.log(num); */ /* вызвать переменную из функции нельзя,
они существую только внутри неё */

console.log(numGlobal);

function ret() {
	let num = 20;
	return num; /* возвращает что-то во внешний мир */
}

const anotherNum = ret();
console.log(anotherNum);

function calc(a, b) {
	return (a + b);
	/* код после return называется unreachable он не запустится */
}

console.log(calc(4, 5));
console.log(calc(10, 2));

/* При function declaration функция создается до выполнения кода,
соотвественно обращение к не можно осуществлять до её объявления */
console.log(declaration(4, 9));

function declaration(c, d) {
	return (c + d);
}

/* function expresiion через переменную, создается в момент,
когда до неё доходит выполнение кода */

const logger = function() {
	console.log('Hello world!');
}; /* Обязательно ; так как это переменная */

logger();

/* стрелочная функция */

let calc1 = a => a++;
let calc2 = (a, b) => a + b;
let calc3 = (a, b, c) => {
	let d = a + b;
	return (d + c);
};

console.log(calc2(4, 5));