'use strict';

//объекты состоят из свойств и методов
//свойство - это то, что описывает наш  объект, те данные, которые мы в него помещаем
//методы - это то что, что наш объект умеет
//есть два типа свойств объектов: данные и свойства акцессоры
//свойства акцессоры - две большие группы: getter и setter

const persone = {
	name: 'Alex',
	surname: 'Smith',
	age: 25,

	get userAge() {
		return this.age;
	},
	//не ругается на повторение, так как это пара свойств, одно получает, второе передает
	set userAge(num) {
		this.age = num;
	}
};

console.log(persone.userAge); //для гетера не надо ставить круглые скобки
//это позволяет работать с этим методом как с обычныс свойством, потому оно и называется свойство аксессор
console.log(persone.userAge = 30);
console.log(persone.userAge);

//дискрипторы свойств аксессоров не имеют свойств value или writable
//но взамен предлагают функции гет и сет
//пример создания аксессора fullName при помощи defineProperty
//свойство может быть либо get/set либо value, если в пример ниже записать и то и то - будет ошибка

Object.defineProperty(persone, 'fullName', {
	get() {
		return `${this.name} ${this.surname}`;
	},

	set(value) {
		[this.name, this.surname] = value.split(" ");
	}
});

persone.fullName = "Denis Shramkov";
console.log(persone.fullName);

//геттеры и сеттеры можно использовать как об>ртку над реальными свойствами объекта
//например мы не хотим записывать короткое имя

let user = {
	get name() {
		return this._name;
	},

	set name(value) {
	if (value.length < 4) {
		alert("Имя слишком короткое, должно быть более 4 символов");
		return;
	}
	this._name = value;
	}
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Имя слишком короткое...

//допустим мы создали объект
function User(name, age) {
	this.name = name;
	this.age = age;
}

let john = new User("John", 25);

alert( john.age ); // 25

//а потом решили поменять одно из его свойств, так как оно нам походит лучше

function User(name, birthday) {
	this.name = name;
	this.birthday = birthday;
}

let jon = new User("John", new Date(1992, 6, 1));

//а что делаьб со всем кодом, который использует старое свойство age? искать и переписывать?
//на помощь приходит гет и сет

function User(name, birthday) {
	this.name = name;
	this.birthday = birthday;

	// возраст рассчитывается из текущей даты и дня рождения
	Object.defineProperty(this, "age", {
	get() {
		let todayYear = new Date().getFullYear();
		return todayYear - this.birthday.getFullYear();
	}
	});
}

let alex = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // доступен как день рождения
alert( john.age );      // ...так и возраст