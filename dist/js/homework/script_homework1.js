'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже смотрели?', '');

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const mov1 = prompt("Какой фильм вы недавно смотрели?", ""),
	rate1 = prompt("Оцените фильм", ""),
	mov2 = prompt("Какой фильм вы недавно смотрели?", ""),
	rate2 = prompt("Оцените фильм", "");

personalMoviesDB.movies[mov1] = rate1;
personalMoviesDB.movies[mov2] = rate2; /* Записывать через []
 чтобы избежать проблем с вводом данных пользователем */

console.log(personalMoviesDB);
