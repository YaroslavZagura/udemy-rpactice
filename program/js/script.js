let numberOfFilms = prompt("Скільки фільмів ви вже переглянули?", "");

let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let firstOfLastMovie = prompt("Один з останніх переглянутих фільмів?", ""),
//     ratingFirstOfLastMovie = prompt("На скільки його оціните?", "від 1 до 10"),
//     secondOfLastMovie = prompt("Один з останніх переглянутих фільмів?", ""),
//     ratingSecondOfLastMovie = prompt("На скільки його оціните?", "від 1 до 10");

// personalMovieDB.movies[firstOfLastMovie] = ratingFirstOfLastMovie;
// personalMovieDB.movies[secondOfLastMovie] = ratingSecondOfLastMovie;

// console.log(personalMovieDB);

// мій варіант№1
for (let i = 0; i < 2; i++) {
    let oneOfLastMovie = prompt("Один з останніх переглянутих фільмів?", "");
    let ratingOneOfLastMovie = prompt("На скільки його оціните?", "від 1 до 10");

    if (oneOfLastMovie === "" || ratingOneOfLastMovie === "" || oneOfLastMovie === null || ratingOneOfLastMovie === null || oneOfLastMovie.length > 50) {
        i--;
        console.log("error");
        continue;
    };

    console.log("done");
    personalMovieDB.movies[oneOfLastMovie] = ratingOneOfLastMovie;
}

// інший варіант по уроку:
for (let i = 0; i < 2; i++) {
    let oneOfLastMovie = prompt("Один з останніх переглянутих фільмів?", "");
    let ratingOneOfLastMovie = prompt("На скільки його оціните?", "від 1 до 10");
    
    if (oneOfLastMovie != "" && ratingOneOfLastMovie != "" && oneOfLastMovie != null && ratingOneOfLastMovie != null && oneOfLastMovie.length < 50) {
        console.log("done");
        personalMovieDB.movies[oneOfLastMovie] = ratingOneOfLastMovie;
    } else {
        console.log("error")
        i--;
    }
}

// інший мій варіант№2:
let countOfMovie = 0;
while (countOfMovie < 2) {
    let oneOfLastMovie = prompt("Один з останніх переглянутих фільмів?", "");
    let ratingOneOfLastMovie = prompt("На скільки його оціните?", "від 1 до 10");

    if (oneOfLastMovie != "" && ratingOneOfLastMovie != "" && oneOfLastMovie != null && ratingOneOfLastMovie != null && oneOfLastMovie.length < 50) {
        console.log("done");
        personalMovieDB.movies[oneOfLastMovie] = ratingOneOfLastMovie;
    } else {
        console.log("error")
        countOfMovie--;
    }

    countOfMovie++;
}

//інший мій варіант№3:
let countMovie = 0;
do {
    let oneOfLastMovie = prompt("Один з останніх переглянутих фільмів?", "");
    let ratingOneOfLastMovie = prompt("На скільки його оціните?", "від 1 до 10");
    if (oneOfLastMovie != "" && ratingOneOfLastMovie != "" && oneOfLastMovie != null && ratingOneOfLastMovie != null && oneOfLastMovie.length < 50) {
        console.log("done");
        personalMovieDB.movies[oneOfLastMovie] = ratingOneOfLastMovie;
    } else {
        console.log("error")
        countMovie--;
    }
    countMovie++;
} while (countMovie < 2);