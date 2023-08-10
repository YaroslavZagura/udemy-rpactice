let numberOfFilms = prompt("Скільки фільмів ви вже переглянули?", "");

let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};