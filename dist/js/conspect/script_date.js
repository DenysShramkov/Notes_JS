'use script';

window.addEventListener('DOMContentLoaded', () => {

});

//const now = new Date('2021-08-13');

const now1 = new Date(2021, 8, 5, 20); //перед одиночными числами не должно быть нуля
//бывает Date.parse('строка') - то же самое, что и выше

console.log(now1); //покажет не 20, а 17, так как учитывается часовой пояс +3 и время покажет по гринвичу

const mil = new Date(0); //можно передавать миллисекунды

console.log(mil); //покажет начальную дату, а имено 70-ый год

//методы даты

const now = new Date(); //в скобки можно передать дату из инпута

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay); //день недели
console.log(now.getTime()); //миллисекунды от начальной даты отсчета
console.log(now.getTimezoneOffset()); //в минутах
console.log(now.getHours()); //местное время
console.log(now.getUTCHours()); //время по гринвичу
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

const nowMod = new Date();

nowMod.setHours(5); //можно установить/поменять время для полученной даты
//если установить часов больше чем в сутках, добавятся дни, то же и для дней, месяцев...
nowMod.setMinutes(15, 54); //если установить больше одного модификатора, второй применится для следующего параметра
//в данно случае 54 для секунд

console.log(nowMod); //если использвать дату через консоль, мы получим время UTC по гринвичу
//если же дату использовать на странице, в консоль или в html выведется местное время, локальная дата

let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i ** 3; //возведение
} //просто цикл для потянуть время

let end = new Date();

alert(`отработал за ${end - start} миллисекунд`);
//получается бенчмарк, которий меряет скорость проведения  операции