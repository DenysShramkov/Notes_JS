'use script';

const box = document.getElementById('box'),
	  btns = document.getElementsByTagName('button'),
	  circles = document.getElementsByClassName('circle'),
	  wrapper = document.querySelector('.wrapper'),
	  hearts = wrapper.querySelectorAll('.heart'), //если мы получили элемент и он родитель другому, необходимому элементу
	  oneHeart = wrapper.querySelector('.heart'); // можно обращаться к нему, а не через элемент
	  

box.style.backgroundColor = 'blue'; //это инлайн стили, они всегда перебивают css стили
box.style.width = '500px';
btns[1].style.borderRadius = '100%';
//btns.style.borderRadius = '100%'; - это будет указание псевдомассиву и не будет работать
//надо указывать конкретному элементу
const square = '100px';
circles[1].style.cssText = `background-color: red; width: ${square}; height: ${square}`;
//cssText - возможность задать больше одного свойства для элемента

/* for (let i = 0; i < hearts.length; i++) { //простой цикл
	hearts[i].style.backgroundColor = 'black';	 
} */

hearts.forEach(item => { //для каждого ийтема внутри псевдомассива
	item.style.backgroundColor = 'black';
}); 

const div = document.createElement('div');
const text = document.createTextNode('some text'); //редко используется, содержимое без тега

div.classList.add('black'); // className устарел
document.body.append(div); //вставить в конец, родителем является body
//можно поместить и вдругие элементы, но для начала их необходимо получить

//если переменная нужна один раз, её необязательно создавать, можно замеенить вложенностью

document.querySelector('.wrapper').append(div); //мы не создавали переменную для получения элемента
//appendChild - устаревший метод, работает аналогично
//предыдущая вставка отменилась
wrapper.prepend(div); //перебивает предыдущую вставку

hearts[0].before(div); //еще методы, перебивают. один элемент можно вставить один раз

//wrapper.insertBefore(div, hearts[1]); устаревший вариант

hearts[1].after(div); // перед или после, добавляет возможностей

circles[2].remove(); //удалить
//wrapper.removeChild(hearts[1]); устаревший метод

hearts[2].replaceWith(circles[1]); //заменяет один элемент другим, выдирая последний со старого места

//wrapper.replaceChild(circles[1], hearts[2]); устаревший. берет кружок и вставляет вместо сердца в родительском wrapper

//если надо подредактировать наш созданный элемент

div.innerHTML = 'Hello <strong>world!</strong>'; //можно вставлять html структуру

div.textContent = 'Hello'; //перебивает, работает только с текстом

//если нужен только текст, лучше использовать команду для текста, иначе пользователь может намеренно вставить
// код и взломать/сломать страницу, что вредит безопасности

wrapper.insertAdjacentHTML('afterbegin', '<h2>какойто код</h2>');
//beforebegin - перед элементом
//afterbegin - в начале элемента
//beforeend - в конце элемента
//afterend - после элемента