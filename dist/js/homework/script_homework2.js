"use strict";

const movies = {};

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
	movies[movie] = ans;

	/* 
	if (movie != null && movie != '' && ans != null && ans != '' && movie < 20) {
		movies[movie] = ans; 
	} else {
		console.log('error'); 
		i--;
	} */
}

console.log(movies);

const moviesCount = +prompt('how much?', '');

if (moviesCount <= 10) {
	console.log("not many");
} else if (moviesCount > 10 && moviesCount < 20) {
	console.log("enaught");
} else if (moviesCount > 20) {
	console.log("alot");
}