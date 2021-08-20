'use script';

function loadSript(src) {
	const script = document.createElement('script');
	script.src = src;
	script.async = false; //скрипт будет загружаться не как асинхронный, а как если бы сразу был бы подключен обычным образом
	document.body.append(script); 
}

// вариант подключение скрипта, он подключится после загрузки данного скрипта, когда выполнение дойдет до строчки
// с созданием скрипта