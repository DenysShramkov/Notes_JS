'use script';

window.addEventListener('DOMContentLoaded', () => {

	const box = document.querySelector('.box'),
		btn = document.querySelector('button');
	//clentWidth и clientHeight не включают бордеры, полосу прокрутки6 однако включают паддинги

	const width = box.clientWidth,
		height = box.clientHeight; //мы получим только число, без пикселей

	console.log(width, height);

	const offWidth = box.offsetWidth,
		offHeight = box.offsetHeight;

	//учитывают паддинги, полосу прокрутки и бордеры

	console.log(offWidth, offHeight);
	
	const scrollHeight = box.scrollHeight; //есть и для ширины, если такая прокрутка есть.
	// показывает высоту объекта вместе с прокручиваемой часть
	//считает с учетом паддинга, но без бордера или марджина, без полосы прокрутки

	console.log(scrollHeight);

	btn.addEventListener('click', () => {
		//box.style.height = scrollHeight + 4 + 'px';

		console.log(box.scrollTop); //можно посмотреть на какую высоту отлистано
	});

	//чаще всего используется scrollTop или scrollLeft, по которым мы можем отслеживать скролл пользователя,
	// особенно на странице и добавлять определенный контент

	//также они могут быть модифицированы, в отличаи от других

	console.log(box.getBoundingClientRect()); //можно получить координаты элемента, отступ верх, право, лево, размеры...
	//right считается не с правого бока, а лево + ширина контента, аналогично и bottom

	const style = window.getComputedStyle(box);
	//для получения стилей, которые были применены к объекту, изменить таким образом нельзя, только получить

	console.log(style.display); //можно получить такой стиль

	//с js нельзя работать с псевдоэлементами, однако можно получить их стиль
	// const style = window.getComputedStyle(box, тут указывается вторым  аргументом псевдолемент)

	//computed стили формируются в css, а инлайн стили box.style - записываются в теги html
	
	console.log(document.documentElement.scrollTop);
	console.log(document.documentElement.scrollHeight);
	//можно получить высоту документа или количество пролистаных пикселей , просто так к документу обратится нельзя
	//не забываем, их можно менять

	window.scrollBy(0, 400); //скролит относительно текущего положение на указанное количество пикселей x and y
	window.scrollTo(0, 400); //скролит до указанного положения, относительно всейй страницы
});