'use strict';

window.addEventListener('DOMContentLoaded', () => {


});

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}

//наследование
class coloredRectangleWithText extends Rectangle {
	constructor(text, bgColor, ...args) { //если все аргументы родителя
	//constructor(heigth, width, text, bgColor) { если указываем аргументы
		super(...args); //вызов конструктора, чтобы не копипастить со всеми аргументами родителя
		//super(height, width) указываем аргументы, если нужны не все аргументы родителя
		//в кавычках нужно указать свойства которые мы хотим использовать, так как не всегда нужны все
		this.text = text;
		this.bgColor = bgColor;
	}

	//методы наследуются

	showMyProps() {
		console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
	}
}

const square = new Rectangle(10, 10);
const longSquare = new Rectangle(10, 20);

const div = new coloredRectangleWithText('hello world', 'red', 10, 20); //если надо передать все родительские аргументы
// const div = new coloredRectangleWithText(10, 20, 'hello world', 'red'); если указываем аргументы

console.log(square.calcArea());
console.log(longSquare.calcArea());

console.log(div.calcArea());
div.showMyProps();