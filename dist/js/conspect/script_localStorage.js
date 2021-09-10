'use strict';

window.addEventListener('DOMContentLoaded', () => {


});

//localStorage
//объект, который встроен в браузер, позволяет сохранять некоторые данные без использования сервера или базы данных
//данные останутся даже после перезагрузки страницы
//если копнуть глубже, то это свойство глобального ответа window

//window.localStorage объект уникален для каждого домена

localStorage.setItem('number', 5);
//первый аргумент - это название ключа, второй аргумент - это его значение

console.log(localStorage.getItem('number'));
//команда для получения данных из локального хранилища

localStorage.removeItem('number'); 
//для очистки локального хранилища

//localStorage.clear();
//для очистки всех данных из локального хранилища


const checkbox = document.querySelector('#checkbox'),
	  form = document.querySelector('form'),
	  change = document.querySelector('#color');

if(localStorage.getItem('checked')) {
	checkbox.checked = true;
}

//change - отсеживание изменения чекбокса, подойдет лучше, чем клик
//для инпута ставим событие input
checkbox.addEventListener('change', () => {
	localStorage.setItem('checked', true);
});

if (localStorage.getItem('bg') === 'changed') {
	form.style.backgroundColor = 'red';
}

change.addEventListener('click', () => {
	if (localStorage.getItem('bg') === 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = '#fff';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'red';
	}
});

const persone = {
	name: 'Denis',
	age: 25
};

//можно записать и более серьёзные данные в localstorage, однако нельзя поместить обёкт, его надо преобразовать в JSON
const serializedPerson = JSON.stringify(persone);

localStorage.setItem('Denis', serializedPerson);

console.log(localStorage.getItem('Denis')); //JSON
console.log(JSON.parse(localStorage.getItem('Denis'))); //получим обратно объект