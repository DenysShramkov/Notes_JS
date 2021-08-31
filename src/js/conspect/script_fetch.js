	//это вариант вместо гет запроса
	fetch('https://jsonplaceholder.typicode.com/todos/1') //если ничего не передавать, будет классический GET запрос
		.then(response => response.json()) //fetch использует промисы. Тут объект вернется в виде промиса
		//в fetch уже встроент инструмент для расшифровки json и превращения его в обычный объект
		.then(json => console.log(json));

		//fetch используется вместо устаревших httprequest, однако и его можно встретить в старых проэктах

	
	//для PUT fetch надо настроить, а именно передать в него некий body
	fetch('https://jsonplaceholder.typicode.com/posts', { //это фейковая апишка, туда ничего не записывается, используется для проверки и отладки
		method: "POST",
		body: JSON.stringify({name: 'Alex'}),
		headers: {
			'Content-type': 'appliction/json'
		}	
})
	.then(response => response.json())
	.then(json => console.log(json));