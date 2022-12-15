const navigator = () => {
  if (location.hash.startsWith("#Details=")) {
    detailsPage();
  } else {
    homePage();
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.addEventListener("hashchange", navigator, false);
window.addEventListener("DOMContentLoaded", navigator, false);

backArrow.addEventListener("click", () => {
  const stateLoad = window.history.state
    ? window.history.state.loadUrl
    : "home";
  if (stateLoad.includes("#")) {
    window.location.hash = "#home";
  } else {
    window.history.back();
  }
});

const detailsPage = () => {
  title.classList.add("hidden");
  listMovies.classList.add("hidden");
  mainDetails.classList.remove("hidden");

  // location.hash = ["#Details=", "id", "-", "TitleMovie"]
  const hashMovie = location.hash.split("=")[1];
  const hashIdMovie = hashMovie.split("-")[0];

  (async () => {
    try {
      const detailsMovie = await getDataTmdb(URL_API_MOVIE_DETAILS(hashIdMovie));
      imgPortada.style.backgroundImage = `url(${RUTA_URL_IMG}${detailsMovie.poster_path})`;
      const watchNowMovie = await getDataTmdb(URL_API_MOVIE_WATCH(hashIdMovie));  
      watchMovie.href = watchNowMovie.results.US.link;

      titleMovie.textContent = detailsMovie.title;
      overviewMovie.textContent = detailsMovie.overview;

      certificationFacts.textContent = "PG";
      releaseFacts.textContent = detailsMovie.release_date;

      const runtime = convertTime(detailsMovie.runtime);
      runtimeFacts.textContent = `${runtime[0]}hr ${runtime[1]}m`;

      userScore.textContent = "Score: " + parseFloat(detailsMovie.vote_average).toFixed(2);
      
      const youtubeUrl = "https://www.youtube.com/watch?v="
      const dataTrailler = await getDataTmdb(URL_API_MOVIE_TRAILLERS(hashIdMovie));
      const youtubeId = dataTrailler.results[0].key;

      traillerUrl.href = youtubeUrl + youtubeId;
    } catch (error) {
      console.log(error);
    }
  })();
};

const homePage = () => {
  title.classList.remove("hidden");
  listMovies.classList.remove("hidden");
  mainDetails.classList.add("hidden");

  logoStream.style.backgroundImage = `url("")`
};
