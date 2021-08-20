'use script';

const btn = document.querySelector('button'),
	overlay = document.querySelector('.overlay'),
	btns = document.querySelectorAll('button');

/* btn.onclick= function() {
	alert('click');
}; В реальных проэктах такой варинат почти не используется*/

/* btn.onclick= function() {
	alert('Второе нажатие');
}; проблема таокго способа в том, что следующий вызов заменяет собой предыдущий*/
//также такое собитые нельзя будет удалить/затереть, если это когда-то понадобится

//создвем обработчик событий, это является более правильным способом
//в ковычках записываем название события "click", далее передаем callback функцию, выполняется строго после события
btns.forEach(item => {
	item.addEventListener('click', () => {
		alert(`clicked`);
	});
});

btn.addEventListener('click', () => {
	alert(`второй clicked`);
});  //в отличии от способа выше, второе событие не перебивает первое, а выполняется вторым (не на второй клик)

btn.addEventListener('mouseover', (e) => {
	//первим аргументом передаём событие event (сокращенно e), по котороу получаем информацию о событии
	//e - это объект, с которым можно работать
	e.target.style.backgroundColor = 'red';
	console.log(e);
	//console.log('hoover');
}); //мышь над элементом

const deleteElem = (e) => {
	e.target.remove();
	//e.currentTarget.remove();
};

btn.addEventListener('click', deleteElem, {once: true});
//третий аргумент - это опции события

overlay.addEventListener('click', deleteElem);

//при вложеннности события будут срабатывать по иерархии, сначала вложенный элемент, потом его родитель и так далее.
//при использовании e.target оба события ссылаются на эемент, на котором изначально произошло событие
//побороть это можно вызовом currentTarget, тогда второе событие обращается к элементу по иерархии, на практике редкость
/* btn.removeEventListener('click', deleteElem);  *///удаление события, если обработчик уже не нужен

const link = document.querySelector('a');

link.addEventListener('click', function(event) { //не в стрелочном варианте
	//отмена события всегда в самом нача
	event.preventDefault(); //метод отменяет стандартное поведение элемента, в данном случае мы говорим браузеру
	//не переходить по ссылке при клике
	console.log(event.target);
});

//Touchevents
//touchstart - событие касание в мобильном браузере
//touchnove - при касании пальце и последующем его движении по экрану, срабатывает событие
//touchend - когда палец оторвался от экрана
//touchenter - когда палец при касании зашол в пределы элемента с данным событием
//touchcensel - если палец вышел за пределы браузера

window.addEventListener('DOMContentLoaded', () => {

	const box = document.querySelector('#box');

	box.addEventListener('touchstart', (e) => {
		console.log('start');
		console.log(e.touches); //дает информацию о касании, количество пальцев
	});

	//touches пишется для event - получаем список пальцев, можно достать target элемент
	//targetTouches - если интересуют пальцы, которые взаимодействуют с этим элементом
	//changedTouches - список пальцев, которые участвуют в текущем событи. Например, если событие touchEnd мы увидим палец
	//Который был убран, даже если все остальные остались на элементе

	box.addEventListener('touchmove', (e) => {
		e.preventDefault(); //при движении не дает странице двигаться
		console.log(e.targetTouches[0].pageX); //мы обращаемся к первому пальцу и получаем его координаты
	});

	box.addEventListener('touchend', () => {
		console.log('end');
	});
});