'use strict';

//forEach просто перебирает элементы, не возвращает новый массив

//filter фильтрует, возвращает новый массив

const names = ['Denis', 'Ivan', 'Anna', 'Abrakadabra'];

const shortNames = names.filter(function(name) { //name - это будет каждый отдельный элемент массива
	//функция в фильтре - ёто колбек функция, можно и в виде стрелочной
	return name.length < 5; //сокращенная запись условия if
});

console.log(shortNames);

//map позволяет взять исходный массив и изменить каждый элемент. На выходе новый массив с измененными данными

let answers = ['DenIS', 'HELLO', 'worlD'];

answers = answers.map(item => item.toLowerCase()); //короткая запись
//не обязательно создавать новую переменную, можно перезаписать существующую

console.log(answers);

//every/some возвращает булиновое значение

const some = [4, 'ddddd', 'Denis'];

console.log(some.some(item =>typeof(item) == 'number')); //проверка, что одно из значение число

console.log(some.every(item => typeof(item)) == 'number'); //false так как не все здесь числа

//reduce - чтобы схлопывать или собирать массив в одно единое целое, особенно касается числовых данных

const arr = [1, 3, 5, 10, 33];
//sum - это текущий элемент и при первом вызове он равен 0
//current - это текущий элемент
//Таким образом к увеличивающейся сумме мы каждый раз добавляем текущий элемент, начиная с нуля
const result = arr.reduce((sum, current) => sum + current);

console.log(result);

const arrText = ['a', 'b', 'dd', 'cc', 'll'];
const resultText = arrText.reduce((sum, current) => sum + current); //просто сложение строк
//const resultText = arrText.reduce((sum, current, 3) => sum + current);
//можно передать и третий аргумент, это начальное sum вместо нуля
const resultTextMod = arrText.reduce((sum, current) => `${sum}, + ${current}`); //сложение с модификатором
console.log(resultText);
console.log(resultTextMod);

//entries
const obj = {
	denis: 'persone',
	ivan: 'persone',
	dog: 'animal',
	cat: 'animal',
};

//const newArrey = Object.entries(obj); //полкчится массив массивов
const newArrey = Object.entries(obj).filter(item => item[1] === 'persone')
.map(name => name[0]); 
//чейнинг. Так как после Obkect.entries мы получили массив
//то по цепочке можно применять к нему методы и к методам методы

console.log(newArrey);


