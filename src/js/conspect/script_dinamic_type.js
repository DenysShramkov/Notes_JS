'use strict';

// to string

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// таким образом мы что угодно можем превратить в строку, но не совсем удобно
// конкотинация - сложение строки с чем-то, на выходе строка

console.log(typeof(5 + '')); //строка

const num = 5;

console.log('http://google.com/' + num); //устаревший способ, лучше через бектики ``

const fontSize = 25 + 'px'; //Динамическая типизация

//to number

console.log(typeof(Number('4'))); //числовой тии

console.log(typeof(+'4')); //через унарный плюс

console.log(parseInt('15px', 10)); //в начале строка для преобразование, затем сисета (в данном случает десятичная)

// to boolean
// пустота, ничего или null  - это всегда false: 0, '', null, undefined, NaN
//все остальное это tru, даже пустые массивы

let switcher = null;

if(switcher) {
	console.log('working');
}

switcher = 1;

if(switcher) {
	console.log('working');
}

console.log(typeof(Boolean('4'))); //не используется

console.log(typeof(!!'444')); //редкий способ
