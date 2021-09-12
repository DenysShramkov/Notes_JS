const myModule = require('./main'); //для экспорта модуля из файла main

const myModuleInstance = new myModule(); //создаем экземпляр

myModuleInstance.hello(); //можем пользоваться модулем
myModuleInstance.goodBye(); //однако браузер не сможет собрать модули
//он не знает, что такое require, module
//любая модульная система должна быть собрана сборщиком в один результрирующий файл