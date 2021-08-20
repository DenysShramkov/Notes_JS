'use script';

//console.log(document.body); //можно напрямую обратиться к body
//console.log(document.head); //можно напрямую обратиться к head

//console.log(document.body.childNodes); //получаем в виде псевдо массива детей тега body
//в данном случае получим NodeList(7) [script#__bs_script__, script, text, comment, div.wrapper, comment, script]
//перенос строки в виде обычного пробела добавляется как текст

//console.log(document.body.firstChild); первый ребенок
//console.log(document.body.lastChild); последний ребенок
console.log(document.body.firstElementChild); //первый элемнт потомок, а не узел

console.log(document.querySelector('#current').parentNode.parentElement);
//получаем родительский узел элементу с указанним айди
//второй вариант получение родительского элемента, а не ноды
//команды можно комбинировать, получится родитель родителя

//дата атрибуты для создание специфических меток на элементы, для их дальнейшего использования
//data-current = '3' data - обязательная часть, дальше произвольная

console.log(document.querySelector('[data-current=`3`]').nextSibling.previousSibling); //для получение соседа, . 
//в данном случае мы получим текстовую ноду, так как следующий элемент - это отступ 
//чтобы избежать такой проблемы, есть другие команды, для получения именно элемента, а не узла
console.log(document.querySelector('[data-current=`3`]').previousElementSibling.nextElementSibling);
//переход по элементам, а не узлам

//получить все элементы без нод невозможно, такой команды нет, однако через перебор можно избавиться от лишнего

for (let node of document.body.childNodes) {
	if (node.nodeName == "#text") {
		continue;
	}

	console.log(node);
}