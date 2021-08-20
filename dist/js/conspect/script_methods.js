'use strict';

const str = "hello";

console.log(str.length);
console.log(str[2]); /* как и из массива можно получить элемент оп индексу */

const arr = [1, 3, 7, 9];

console.log(arr.length);

console.log(str.toUpperCase());
console.log(str); /* Значение не поменяется из-за функции выше, она не меняет строку,
а возвращает новую измененную строку */
const strLower = console.log(str.toLowerCase()); /* Новая измененная строка */

const fruit = "many fruits";

console.log(fruit.indexOf("fruits"));
console.log(fruit.indexOf('q')); /* Будет -1 так как нет такого элемента */

const logg = 'Hello world';

console.log(logg.slice(6, 11));  /* конец указывать на одну больше, так как он не считает включительно */

console.log(logg.slice(-5, -1)); /* поддерживает отрицательные значения, начинает с конца */

console.log(logg.substring(6, 11)); /* Делает то же самое, не поддерживает - */

console.log(logg.substr(6, 5)); /* Указывает вторым аргументом длина вырезаемого участка */

const num = 12.2;

console.log(Math.round(num)); /* Округление */

const test = '12.2px';

console.log(parseInt(test)); /* Пример непрямого использования функций */
/* ИСпользуется на числах для перевода в другую сисетму исчеслений, но можно и так */
console.log(parseFloat(test)); /* возвращает с дробным значением */

