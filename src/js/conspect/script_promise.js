'use strict';

console.log('Запрос данных');

const req = new Promise(function(resolve, reject) {
	//создаем обещание, которое помещаем внутрь переменной req
	//предполагаем, что оно может завершиться положительно или отрицательно
	//resolve - функция, если обещание выполнилось
	//reject - функция, если что-то пошло не так, как задумывалось
	setTimeout(() => {
		console.log('Подготовка данных...');
	
		const product = {
			name: 'TV',
			price: '2000',
		};
	
		resolve(product); //данные надо передавать между функциями
	}, 2000);
});

req.then((product) => {//это и есть наш resolve, или then - потом
	console.log('данные получены');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
			//reject() выведется функуия, что что-то пошло не так
		}, 1000);
	});
}).then(data => { //можно без вызова переменной для нового промиса, тогда код выходит лаконичней
	data.modify = true;
	return data;
}).then(data => {
	console.log(data);
}).catch(() => {
	//всегда ставится в конце, если что-то пойдет не так
	console.log('произошла ошибка');
}).finally(() => {
	console.log('finally'); //код который в любом случае выполнится в самом конце. вне зависимости от resolve или reejct
	//например, надо очистить форму вне зависиомтси от того. выполнился ли код или где-то произошла ошибка
	//например, форма не отправилась
});
//так можно четко создавать цепочку и вложенность

/* req.then((product) => {//это и есть наш resolve, или then - потом
	console.log('данные получены');
	const req2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
		}, 1000);
		});

		req2.then((product) => {
			console.log(product);
	});
}); */

//если нужна строгая последовательность операций и их много, будет значительно разростаться дерево колбеков

/* setTimeout(() => {
	console.log('Подготовка данных...');
	
	const product = {
		name: 'TV',
		price: '2000',
	};

	setTimeout(() => {
	product.status = 'order';
			console.log(product);
	}, 1000);
}, 2000); */

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

/* test(1000).then(() => {
	console.log('1000 миллисекунд');
});

test(2000).then(() => {
	console.log('1000 миллисекунд');
}); */

Promise.all([test(1000), test(2000)]).then(() => {
	//promise.all ждет окончания всех промисов, которые были переданы в него и после выводит результат, как логическое И
	console.log('ALL');
});

Promise.race([test(1000), test(2000)]).then(() => {
	//promise.race выполнится, когда хотябы одна из функций выполнится. Похоже на логическое ИЛИ
	console.log('Race');
});