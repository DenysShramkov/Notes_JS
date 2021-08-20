'use strict';

const personalMoviesDB = {

	count: null,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start: function() {
		let numberOfFilms = +prompt('Сколько фильмо вы посмотрели?', '');
	
		while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = +prompt('Сколько фильмо вы посмотрели?', '');
		}
		personalMoviesDB.count = numberOfFilms;
	},
	writeYourGenres: function(callback) {
		for (let i = 0; i < 2; i++) {
			let genre = prompt(`Favourite genre number ${i+1}?`, "");
			if (genre == null) {
				alert("error");
				i--;
				continue;
			}
			if (genre.length < 1 || genre.length > 20 || genre == null) {
				alert("error");
				i--;
				continue;
			}
			personalMoviesDB.genres[i] = genre; /* можно было сделать через строку и метод split */
		}
		callback();
	},
	myList: function() {
		for (let i = 0; i < 2; i++) {
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
	},
	detectFilmsAmount: function() {
		if (personalMoviesDB.count <= 10) {
			console.log("not many");
		} else if (personalMoviesDB.count > 10 && personalMoviesDB.count < 20) {
			console.log("enaught");
		} else if (personalMoviesDB.count > 20) {
			console.log("alot");
		}
	},
	showMyDB: function() {
		if (!personalMoviesDB.privat) {
			console.log(personalMoviesDB);
		} else {
			console.log('no permission');
		}
	},
	toggleVisibleMyDB: function(callback) {
		personalMoviesDB.privat = !personalMoviesDB.privat;
		callback();
	},
	showGenres: function() {
		personalMoviesDB.genres.forEach((element, i) => {
			console.log(`Любимый жанр номер ${i + 1} - это ${element}`);
		});
	},
};

personalMoviesDB.start();
personalMoviesDB.writeYourGenres(personalMoviesDB.showGenres);
personalMoviesDB.myList();
personalMoviesDB.detectFilmsAmount();
personalMoviesDB.showMyDB();
personalMoviesDB.toggleVisibleMyDB(personalMoviesDB.showMyDB);