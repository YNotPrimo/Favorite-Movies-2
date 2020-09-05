const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = () => {
    const movieList = document.getElementById("movie-list");

    if (movies.length === 0) {
        movieList.classList.remove("visible");
    } else {
        movieList.classList.add("visible");
    }

    movieList.innerHTML = "";

    movies.forEach(movie => {
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


addMovieBtn.addEventListener("click", addMovieHandler);