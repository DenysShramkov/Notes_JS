'use strict';

window.addEventListener('DOMContentLoaded', () => {


});

const inputRUB = document.querySelector('#rub'),
	  inputUSD = document.querySelector('#usd');

//есть событие change когда ушол фокус с элемента инпута
inputRUB.addEventListener('input', (e) => {
	const request = new XMLHttpRequest(); //создали экземпляр класса с запросом
	
	//request.open(method, url, async, login, pass); //собирают настройки для запроса
	//по умолчанию ajax асинхронный
	//method - метод пост, гет... url ссылка на сервер... async отвечает за асинхронность
	//ссинхронный идет по порядку, ассинхронный выполняются не зависимо от других, как сеттаймаут

	request.open('GET', 'js/current.json');
	//'GET' получить данные, 'POST' - получить
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	//
	//request.send(body) //те данные, которые уходят на сервер, только для метода 'POST' не для 'GET'
	request.send(); //отправляем запрос

	//свойство status - статус запроса, 0, 200, 404...
	//statusTetxt - короткая расшифровка статусов
	//response - ответ от сервера
	//readyState - состояние нашего запроса

	//request.addEventListener('readystatechange', () => { //используется редко, редко нужны все статусы
	request.addEventListener('load', () => { //когда загружен, но не факт, что выполнен успешно
		//отселживает статус готовности нашего запроса в данный текущий момент
		//проврека - 4 значит, что запрос завершен, данные пришли. 200 значит, что он успешно завершился
		if (/* request.readyState === 4 &&  для лоада уже не нужен*/ request.status === 200) {
			//статус оставляем, чтобы проверить успешность запроса
			let data = JSON.parse(request.response);
			inputUSD.value = (+inputRUB.value / data.current.usd).toFixed(2);
		} else {
			inputUSD.value = 'error';
		}
	});
});