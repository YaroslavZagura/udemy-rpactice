let numberOfFilms = prompt("Скільки фільмів ви вже переглянули?", "");

let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstOfLastMovie = prompt("Один з останніх переглянутих фільмів?", ""),
    ratingFirstOfLastMovie = prompt("На скільки його оціните?", "від 1 до 10"),
    secondOfLastMovie = prompt("Один з останніх переглянутих фільмів?", ""),
    ratingSecondOfLastMovie = prompt("На скільки його оціните?", "від 1 до 10");

personalMovieDB.movies[firstOfLastMovie] = ratingFirstOfLastMovie;
personalMovieDB.movies[secondOfLastMovie] = ratingSecondOfLastMovie;

console.log(personalMovieDB);
