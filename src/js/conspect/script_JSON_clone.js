'use strict';

const persone = {
	name: 'Alex',
	tel: '+7452391928',
};

console.log(JSON.stringify(persone)); //для отправки на сервер
//соблюдается правило, что все эелементы должны быть в двойных ковычках

console.log(JSON.parse(JSON.stringify(persone))); //превращаем обработанный JSON обратно в наш объект
//таким образом можно обрабатывать данне полученные с сервера, бекенда

//JSON позволяет создавать глубокие копии объектов, сначала используя stringify, а потом распарсив его

const obj = {
	name: 'Denis',
	tel: '+380936095333',
	info: {
		country: 'Ukraine',
		city: 'Odesa',
	}
};

const cloneObj = JSON.parse(JSON.stringify(obj));
//таким образом мы создадим полный клон обекта, вне зависимости от глубины его вложенности