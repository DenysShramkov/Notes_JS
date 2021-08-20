'use script';

window.addEventListener('DOMContentLoaded', () => {

	/* const timerID = setTimeout(function() {
		console.log('Hello with timeout');
	}, 2000);
	const timerID2 = setTimeout(function(text) {
		console.log(text);
	}, 3000, 'Hello'); */


	const btn = document.querySelector('.btn');

	function myAnimation() {
		const elem = document.querySelector('.box');
		let pos = 0;

		//const id = setInterval(frame, 10);
		frame1(); //мой вариант через вызов рекурсивной функции

		function frame() {
			if (pos === 294) {
				clearInterval();
			} else {
				pos++;
				elem.style.top = `${pos}px`;
				elem.style.left = `${pos}px`;
			}
		}

		function frame1() {
			if (pos <= 294) {
				pos++;
				elem.style.top = `${pos}px`;
				elem.style.left = `${pos}px`;
				setTimeout(frame1, 10);
			}
		}
	}

	btn.addEventListener('click', myAnimation, {once: true});

	//let timerID4, //чтобы после добавления события переменную можно было использовать повторно
	//	i = 0;

	/* function hello() {
		if (i > 4) {
			clearInterval(timerID4);
		}
		console.log('Hello with existing function');
		i++;
	} */

	//setTimeout(hello, 4000); //Можно вызывать готовые функции

	//const timerID3 = setTimeout(hello, 3000); 
	//задаем через переменную, чтобы потом иметь возможность сбросить таймер, если будет необходимо

/* 	clearInterval(timerID3);
	clearTimeout(timerID3); */

	//btn.addEventListener('click', () => {
	//	clearTimeout(timerID2); //бсрос таймера по нажатию
	//	timerID4 = setInterval(hello, 2000); //После нажатия кнопки каждые две секунды действие будет повторяться
		//сбросить простым вызовом, как сбрасывали выше, уже не получится. Придется создавать условие
		//если внутри функции hello будет свой таймер, тогда сетинтервал не будет ждать своё время после выполнения
		//таймера внутри, он будет думать, что время уже прошло и сразу запустит выполнение функции
		//в таких случаях вызывает функцию внутри функции, или рекурсию
	//});

	/* let id = setTimeout(function log() {
		console.log('Recursion is working');
		id = setTimeout(log, 500);
	}, 500); */
	//данный код будет отрабатывать строго установленное время, какое бы действие не происходило
	//и сколько бы времени не заняла (вместо console.log из примера выше), функция таймоута всегда дождется выполнения
	//и перезапуститься вызвав саму себя


	//Функци в данном примере анонимная
	//способ задания отложенной функции через setTimeout, в качестве второго аргумента передается время в миллисекундах

});