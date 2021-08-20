'use script';

window.addEventListener('DOMContentLoaded', () => {

	const btns = document.querySelectorAll('button'),
		wrapper = document.querySelector('.btn-block');

	console.log(btns[0].classList.length); //количество классов

	console.log(btns[0].classList.item(0)); //метод, позволяет получить класс под любым индексом

	console.log(btns[0].classList.add('red', 'one', 'second')); //позволяет добавить один или несколько классов к элементу

	console.log(btns[0].classList.remove('blue')); //позволяет у элемента удалить определенный класс

	console.log(btns[0].classList.toggle('blue')); //позволяет переключать класс. 
	//Если его нет на элементе, класс добавится, а если класс есть, он удалится

	if (!btns[2].classList.contains('blue')) {
		//contains позволяет проверить наличие определенного класса в элемента
		btns[2].classList.add('red');
	}

	btns[1].addEventListener('click', () => {
		btns[3].classList.toggle('blue');
	});

	console.log(btns[0].className); //устаревшее свойство. Являет собой строку, которая содержит названия классов

	wrapper.addEventListener('click', (e) => {
		if (e.target && e.target.tagName == 'BUTTON') {
			//пример дилегирования, не надо навешивать на каждый элемент событие, а достаточно на родительский
			// не все элементы поддерживают события, например br, e.target - мы проверяем поддержку событий
			console.log('hello');
		}
	});

	wrapper.addEventListener('click', (e) => {
		if (e.target && e.target.classList.contains !== 'blue') {
			//if (e.target && !e.target.classList.contains('blue')) 
			//if (e.target && !e.target.matches('blue')) 
			//можно сделать через e.target.matches('.red') проверяется совпадение
			e.target.classList.add('blue');
		}
	});

	wrapper.addEventListener('click', (e) => {
		if (e.target && e.target.tagName == 'BUTTON') {
			wrapper.append(document.createElement('button')); 
			//достоинством дилегирования: событие вешается на родителя. Событие будет работать и для всех новых элементов
		}
	});

	//e содержит в себе много информации, по target можно получить элемент, на который произошло нажатие
	//У элемента есть параметр tagName содержащий имя тега

});