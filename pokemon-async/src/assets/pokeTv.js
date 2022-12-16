const SEARCH = "pokemon";

const URL_API_TMDB = "https://api.themoviedb.org/3";
const API_KEY_TMDB = "2492785d913953d3872744cbd439746e";
const RUTA_MOVIE_DETAILS = (id) =>  `/movie/${id}?api_key=`;
const RUTA_MOVIE_TRAILLER = (id) =>  `/movie/${id}/videos?api_key=`;
const RUTA_MOVIE_WATCH = (id) =>  `/movie/${id}/watch/providers?api_key=`;
const RUTA_MOVIE_RECOMMENDATIONS = (id) =>  `/movie/${id}/recommendations?api_key=`;
const RUTA_SEARCH = "/search/movie?api_key=";
const QUERY_SEARCH = `&query=${SEARCH}`;

const RUTA_URL_IMG = "https://image.tmdb.org/t/p/w300/";
// -------------------------------------------------------------------------//

const URL_API_SEARCH = URL_API_TMDB + RUTA_SEARCH + API_KEY_TMDB + QUERY_SEARCH;
const URL_API_MOVIE_DETAILS = (id) =>  URL_API_TMDB + RUTA_MOVIE_DETAILS(id) + API_KEY_TMDB;
const URL_API_MOVIE_TRAILLERS = (id) =>  URL_API_TMDB + RUTA_MOVIE_TRAILLER(id) + API_KEY_TMDB;
const URL_API_MOVIE_WATCH = (id) =>  URL_API_TMDB + RUTA_MOVIE_WATCH(id) + API_KEY_TMDB;
const URL_API_MOVIE_RECOMMENDATIONS = (id) =>  URL_API_TMDB + RUTA_MOVIE_RECOMMENDATIONS(id) + API_KEY_TMDB;

const fetchDataMovies = async (urlApi) => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

const getDataTmdb = async (urlApi) => {
  const trending = await fetchDataMovies(urlApi);
  return trending;
};

const createPoster = (container, movies) => {
  container.innerHTML = "";
  movies.forEach((element) => {
    const imgPoster = document.createElement("img");
    
    imgPoster.classList.add("w-32");
    imgPoster.classList.add("rounded-lg");
    imgPoster.classList.add("cursor-pointer");

    imgPoster.setAttribute("id", "id" + element.id);
    imgPoster.setAttribute("src", "");
    imgPoster.src = RUTA_URL_IMG + element.poster_path;

    container.appendChild(imgPoster);

    if(element.name) {
      imgPoster.addEventListener("click", () => {
        location.hash = `#Details=${element.id}-${element.name.split(" ").join("")}`;
      })
    } else {
      imgPoster.addEventListener("click", () => {
        location.hash = `#Details=${element.id}-${element.title.split(" ").join("")}`;
      })
    }
  });
};

const showMoviesAll = async () => {
  const result = await getDataTmdb(URL_API_SEARCH);
  const filterResult = result.results;
  let bestValue = sortMoviesScore(filterResult);
  bestValue.shift();
  bestValue.pop();
  bestValue.pop();
  bestValue.pop();
  bestValue.pop();
  bestValue.pop();
  createPoster(listMovies, bestValue);
};

(async () => {
  try {
    showMoviesAll();
  } catch (error) {
    console.log(error);
  }
})();

// utils][]
const sortMoviesScore = (obj) => {
  return obj.sort((a,b) => b.vote_average - a.vote_average)
}

const convertTime = (time) => {
  const minutosInt = parseInt(time);
  
  const horas = Math.floor(minutosInt / 60);
  const minutos  = minutosInt % 60;
  
  return [horas, minutos];
}
