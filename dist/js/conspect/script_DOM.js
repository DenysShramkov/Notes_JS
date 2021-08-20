'use script';

const box = document.getElementById('box'); //id на страніце один

console.log(box);

const btns = document.getElementsByTagName('button'); // on')[1] получить вторую кнопку
//получим не один элемент, а псевдомассив (без всех методов, что есть у массива)
//наследуется от htmlcollection, кроме длины и элементов под определенным индексом ничего не содержит

console.log(btns); //для изменения надо обращаться не к массиву, а конкретному элементу. через индекс или перебором

const circles = document.getElementsByClassName('circle');

console.log(circles[1]);

const hearts = document.querySelectorAll('.heart');
//Имеет метод for each

hearts.forEach(item => {
	console.log(item);
});

const oneHeart = document.querySelector('.heart');

console.log(oneHeart); // Возвращает один элемент либо первый из множества