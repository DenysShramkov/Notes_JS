'use strict';

function User(name, age, surname) {
	this.name = name; //будет доступ
	this.age = age; //будет доступ извне
	let userAge = age; //не будет доступа извне

	this.say = function() {
		console.log(`Имя пользователя ${this.name}, ${this.age}`);
	};

	this.getAge = function() {
		return userAge;
	};

	this.setAge = function(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			userAge = age;
		} else {
			console.log('Недопустимое значение');
		}
	};
}

const denis = new User('Denis', 28, 'Shramkov');

console.log(denis.name);
console.log(denis.userAge);
//мы не получим доступ, так как это не свойство объекта
console.log(denis.getAge());
//так мы можем получить userAge

denis.name = 'Alex';
//Любой может вмешаться и поменять значения нашего объекта, инкапсуляция не работает

denis.userAge = 30;
//мы не сможем получить доступ к данной переменной, что можно считать нашей инкапсюлаяцией
denis.setAge(30); //а так мы можем установить наше значение, но мы сами разрешаем это сделать
denis.setAge(300); //не пройдет проверку, запись не пройдет. Так мы установили ограничение на перезапись объекта

denis.say();
//мы написали небольшую инкапсюляцию

class Car {
	constructor(model, price) {
		this._model = model;
		//такой метод будет приватным, недоступным извне, для его управления надо использовать геттеры и сетеры
		this.price = price;
		//let carPrice - мы не сможем к нему обратиться далее даже через this, carPrice - не записано как свойство
		//не убрав такое объявление мы опять свойство сделали публичным и его можно заменить
	}
	
	/* #type = 'model X'; */ //экспеременальный метод создания переменной, которую мы не планируем в дальнейшем менять
	//работает пока только в мазилле, свойство так становится приватным

	/* say = () => {
		console.log(`This ${this.model} ${this.#type} costs ${this.price}`);
		//чтобы не терять контекст, но работает пока только в мазилле, так как метод эксперементальный
		//снаружи достучаться не выйдет
	}; */

	getPrice() {
		return this.price;
	}

	setPrice(price) {
		if (typeof(this.price) == 'number' && this.price > 0 && this.price < 100000) {
			this.price = price;
		}
	}

	get car() {
		return this._model;
	}

	set car(newModel) {
		this._model = newModel;
	}
}

const tesla = new Car('Tesla', 40000);
tesla.price = 60000;
console.log(tesla.price);
tesla.model = 'dodge'; //создасться новое свойство, не зависящее от _model
//tesla._model = 'jeep'; так можно переписать, но договоренность гласит, что так делать нельзя
//console.log(tesla.model);
//console.log(tesla._model); так договорились не обращаться, такое написание не свойство языка
//а потому ничего не делает, просто такая договоренность
console.log(tesla.model); //новое свойтсво запишется но не изменить _model
console.log(tesla.car);
tesla.car = 'Jeep';

//изначально классы не планировались, из-за чего создать внутри переменную, чтобы к ней небыло доступа, пока незвозможно