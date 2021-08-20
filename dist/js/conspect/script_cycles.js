'use strict';

let num = 50;

while (num <= 55) {
	console.log(num);
	num++;
} 

let line = 1;

do {
	console.log(line);
	line++;
}
while (line <=10);

for (let i = 1; i < 10; i++) {
	console.log(i);
}

let numb = 90;
for (let i = 1; i < 10; i++) {
	console.log(numb);
	numb++;
}

for (let i = 1; i > 0; i++) {
	if (i === 6) {
		break; /* рвет цикл при достижении определенного условия */
	} /* continue пропускает шаг цикла при достижении условия и продолжает */
	console.log(i);
}

for (let i = 1; i < 10; i++) {
	if (i === 6) {
		continue;
	}
	console.log(i);
}