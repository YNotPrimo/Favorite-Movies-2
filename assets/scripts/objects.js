const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");

    if (movies.length === 0) {
        movieList.classList.remove("visible");
    } else {
        movieList.classList.add("visible");
    }

    movieList.innerHTML = "";

    const filteredMovies = !filter
        ? movies :
        movies.filter(movie => movie.info.title.includes(filter));


    filteredMovies.forEach(movie => {
        const movieEl = document.createElement("li");
        const movieInfo = movie.info;

        let text = movieInfo.title + " - ";

        for (const key in movieInfo) {
            if (key !== "title") {
                text += `${key}: ${movieInfo[key]}`;
            }
        }

        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};


const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;


    if (title.trim() === ""
        || extraName === ""
        || extraValue === "") {
        return
    };

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random()
    };

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value;
    renderMovies(filterTerm);
}

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);