// 'use strict';

window.addEventListener('DOMContentLoaded', () => {


});

function showThis() {
	console.log(this);
}
//Обычная функция. При запуска при вызове контектса функция будет ссылаться на глобальный объект window (в браузере)
//при использовании строго режима this переходит в undefined 
showThis();

function showThis2(a, b) {
	console.log(this);
	function sum() {
		console.log(this); //результат тот же, undefined или window, в зависимости от режима
		//return this.a + this.b; //будет ошибка, нельзя получить 'a'
		return a + b; //сначала будет искать внутри себя, таким переменных нет, поднимется на урвоень выше
	}
	console.log(sum());
}

showThis2(4, 5);

const obj = {
	a: 20,
	b: 30,
	sum: function() {
		console.log(this);
		//контекст у метода объекта - это сам объект
		function shout() {
			console.log(this);
		}
		shout(); // получим ошибку, так как это простй вызов функции, а не вызов в контексте объекта
	}
};

obj.sum(); //контекст у метода объекта - это сам объект

const obje = {
	num: 5,
	sayNumber: function() {
		const say = () => {
			console.log(this);
		};
		say(); //стрелочная функция наследует контекст родителя, а потомe она работает, так как её родитель
		//это метод объекта obje, а у метода контекстом является сам объект
	} 
}

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log(`Hello ${this.name}`);
	};
}
//this в конструкторах и классах - это новый экземпляр объекта

const denis = new User('Denis', 28); 

function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

const user = {
	name: 'Jihn',
};

sayName.call(user, 'Smith'); //внутрь мы передаем объект, который будет контестом вызова для функции
//в результате получим объект, который задали контекстом при помощи метода call или apply
//вторым получим непосредственно имя
sayName.apply(user, ['Smith']); //делает то же самое, разница только в синтаксисе, если надо передать аргумент

function count(num) {
	return this * num;
}

const double = count.bind(2);
//создает новую функцию с заданным нами контекстом, в данном случае 2 встанет на место this
//это ручная привязка this

console.log(double(3));


//1 - обычная функция: this = window или undefined при use strict
//2 - контекст у методов объекта - это сам объект
//3 - this в онструкторах и классах - это новый экземпляр объекта
//4 - ручная привзяка this: call, apply и bind
// стрелочная функция в обработчике событий потеряет контекст и вернет undefined
// но, так как в таких случаях используется объект собития, контекст не важен и стрелочная функция подходит

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
	console.log(this); //получим кнопку в качестве контекста вызова этой функции
	//работает так если обработчик написан через простую функцию, в ввиде колбек функции
	this.style.backgroundColor = 'red'; //this в этом случае будет аналогичен event.target
	//в практіке іспользуется обїект собития, а не контекст вызова
});

//в обработчике собый стрелочная функция не будет иметь своего контекста, а значит вернет undefined
// но, так как в таких случаях используется объект собития, контекст не важен и стрелочная функция подходит

const calc = a => a * 2; //если помещается в одну строчку, можно так и без return
//если аргумент один, то и без круглый скобок