'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", "");
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let oneOfLastMovie = prompt("Один з останніх переглянутих фільмів?", "").trim();
        let ratingOneOfLastMovie = prompt("На скільки його оціните?", "від 1 до 10").trim();
        
        if (oneOfLastMovie != "" && ratingOneOfLastMovie != "" && oneOfLastMovie != null && ratingOneOfLastMovie != null && oneOfLastMovie.length < 50) {
            personalMovieDB.movies[oneOfLastMovie] = ratingOneOfLastMovie;
            console.log("done");
        } else {
            console.log("error")
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто дуже мало фільмів");
    } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
        console.log("Ви класичний глядач");
    } else if (personalMovieDB.count > 30) {
        console.log("Ви кіноман");
    } else {
        console.log("Сталася помилка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB)
    }
} 
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let favoriteGenre = prompt(`Ваш улюблений жанр під номером ${i}`, "");
        
        if (favoriteGenre != "" && favoriteGenre != null && isNaN(favoriteGenre)) {
            personalMovieDB.genres[i - 1] = favoriteGenre;
            console.log("good");
        } else {
            console.log("error")
            i--;
        }
    }
}
writeYourGenres();