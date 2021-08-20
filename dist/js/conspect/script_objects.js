'use strict'; 

const test = {
	name: 'test',
	width: 1024,
	height: 1980,
	colors: {
		border: "green",
		bg: 'red',
	},
	class: 'button',
	makeTest: function() {
		console.log('Test'); /* создан свой собственный метод */
	},
}

const {border, bg} = test.colors; /* Деструктуризация объекта,
 чтобы вытащить вложенность и разбить на более доступные и мелкие части */

test.makeTest();

console.log(Object.keys(test)); /* Можно получить все ключи в виде массива */
/* у массива уже можно определить длину через length */
console.log(Object.keys(test).length);
/* console.log(test.width);

delete test.name; удаление элемента объекта*/

let counter = 0;
for (let key in test) {
	if (typeof(test[key]) === 'object') {
		for(let i in test[key]) {
			console.log(`Свойство ${i} имеет значние ${test[key][i]}`);
			/* counter++ */
		}
	} else {
		console.log(`Свойство ${key} имеет значние ${test[key]}`);
		/* counter++ для подсчета всего элементов на высоком и низком уровне */
	}
	counter++;
}
console.log(counter);