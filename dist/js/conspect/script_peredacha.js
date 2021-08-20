'use strict';

let a = 5,
	b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
	a: 5,
	b: 1,
};

const copy = obj;
/* Новая переменная является ссылкой на объект, а не его независимой копией */

copy.a = 10;
/* В отличии от переменной (простого типа данных), создавай копию объекта и меняя в ней что-то,
изменене коснется и оригинала7 Это называется передачей по ссылке (для простых данных передача по значению*/
console.log(copy);
console.log(obj);

function copyR(mainObj) {
	let objCopy = {};
	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}
/* Данной функцией создали копию объекта и они друг на друга не влияют*/
const numbers = {
	a: 2,
	b: 4,
	c: {
		t: 9,
		y: 7,
		j: 11
	},
	l: 8,
};

const numbersCopy = copyR(numbers);
numbers.b = 99;
numbersCopy.b = 22;
numbersCopy.c.y = 66; /* Изменение произойдет в двух объектах, так как С является объектом 
и мы скопировали его целиком, его перебирать так же необходимо */
/* такой подход называется поверхностной копией объекта */
console.log(numbers);
console.log(numbersCopy);

const add = {
	d: 17,
	e: 20
};
const clone = Object.assign({}, add); /* Создает поверхностный объект добавляя объект к пустому */
clone.d = 40;
console.log(clone);
console.log(add);
console.log(Object.assign(numbers, add));
/* Позволяет создать новую копию объекта никак не зависящую ни от add ни от numbers */

const oldArray = ['a', 'b', 'c', 'm'];
const newArray = oldArray.slice(); /* Создает копию массива, можно обрезать при желании */

oldArray[0] = 'k';

console.log(oldArray);
console.log(newArray);

/* Оператор разворота */

let abb = [1, 6, 0, "hg", 'gyyii'],
	news = [8,  3, 'lem', 'lem'],
	addToo = [...abb, ...news, 'youm', 'and']; /* Позволяет из нескольких массивов сделать один */
	/* Разворачивает элемент, создавая отдельные сущности */

console.log(addToo);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [1, 8, 4];
log(...num); /* просто так передать нельзя, необходимо разложить на отдельные сущности */

const easy = [1, 6, 'h'];
const easyArray = [...easy]; /* легки способ создать копию массива, использовав спред оператор, вместо слайс */

const eObj = {
	a: 1,
	b: 54
};
const easyObj = {...eObj}; /* Спред оператор работает и на объектах, так же можно легко создать копию */