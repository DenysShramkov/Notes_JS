function myModule() {
	this.hello = function() {
		console.log('Hello');
	};

	this.goodBye = function() {
		console.log('bye!');
	};
} //по сути функция конструктор

module.exports = myModule; //Это синтаксис command.js, чтобы данный модуль можно было использовать в другом js файле
//это для экспорта