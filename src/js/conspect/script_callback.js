"use strict";

function first() {
	/* Do something */
	setTimeout(function() {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second();

/* Естественно функция 2 запустится раньше второй из-за задержки
однако не всегда эта хадержка видна или очевидноб а необходима работа в заданном порядке */

function learnJS(lang, callback) {
	console.log(`я учу ${lang}`);
	callback();
}
function done() {
	console.log('Я прошел этот урок');
}

learnJS('JavaScript', done); /* Передача функции callback без () */
/* learnJS('JavaScript', function() {
	console.log('я прошел єтот урок');
}); Также пример анонимной функции */