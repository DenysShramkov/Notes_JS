"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмо вы посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { /* isNaN
		Метод проверка что является не числом */
		numberOfFilms = +prompt('Сколько фильмо вы посмотрели?', '');
	}
}
start();

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let genre = prompt(`Favourite genre number ${i+1}?`, "");
		if (genre == null) {
			break;
		}
		if (genre.length < 1 || genre.length > 20 ) {
			alert("error");
			i--;
			continue;
		}
		personalMoviesDB.genres[i] = genre;
	}
}

writeYourGenres();
console.log(personalMoviesDB);

function myList() {
	for (let i = 0; i <= 3; i++) {
		let movie = prompt("movie?", "");
		if (movie == null) {
			break;
		}
		let ans = prompt("mark?", "");
		if (ans == null) {
			break;
		}
		if (movie.length < 1 || movie.length > 20 || ans.length < 1 ) {
			alert("error");
			i--;
			continue;
		}
		personalMoviesDB.movies[movie] = ans;
	}
}

myList();

function detectFilmsAmount() {
	if (numberOfFilms <= 10) {
		console.log("not many");
	} else if (numberOfFilms > 10 && numberOfFilms < 20) {
		console.log("enaught");
	} else if (numberOfFilms > 20) {
		console.log("alot");
	}
}

detectFilmsAmount();

function showMyDB() {
	if (!personalMoviesDB.privat) {
		console.log(personalMoviesDB);
	} else {
		console.log('no permission');
	}
}

showMyDB();