//должно быть как можно меньше глобальных переменных, чтобы не засорять глобальную область видимости
//если мы подключим на страницы два js файла и установим переменную с одинаковым названием
//то получим ошибку, так как обе переменных будут в глобальной области и во втором скрипте будет ошибка
//так как переменная уже объявлена в первом скрипте
let number = 0;

(function(){
	let number = 2;
	console.log(number); //работает с внутренней переменной
}()); //такая конструкция - это анонимная самовызывающаяся функция
//анонимная - нет имени и она сразу вызывается
//таким образом к ней нет доступа извне
//внешние скобочки нужны, без них будет function expression и будет ошибка

console.log(number); //работает с глобальной переменной, к внутренней в функции доступа нет

//такая функция и есть модуль

const user = (function() {
	const privat = function() { //доступа извне нет
		console.log('privat');
	};
	return { // мы сами предоставлем доступ
		sayHello: privat
	}; //ретурн создает объект и наша самовызывающая функция экспортирует те методы или свойства
	//которые нам действительно нужны будут снаружи

}());

user.sayHello();