'use strict';

let str = 'some';
let strObj = new String(str); /* с большой буквы */

console.log(typeof(str)); /* Строка */
console.log(typeof(strObj)); /* Тут получили объект */

console.dir([1, 2, 3]); /* создавая массив, мы создаем экземпляр массива, который уже имеет методы,
записанные в __proto__ (смотреть через браузер) */

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log('hello');
	},
};

const John = {
	health: 200,
};

/* John.__proto__ = soldier; Устаревший способ, чтобы сделать John прототипом объекта soldier */
Object.setPrototypeOf(John, soldier); /* Установили прототип от John для soldier */
const john = Object.create(soldier); /* создаем объект, который является прототипом soldier и унаследует его свойства */
console.log(John); /* Получим свойства объекта John  */
console.log(John.armor); /* John является прототіпом объекта soldier, мы получим значение armor  */
John.sayHello(); /* Работает и на функции */