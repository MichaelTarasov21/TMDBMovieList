const apikey = "3f608c38cd2f8183bcad8e64c24884f9";
const queryurl = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
let request = new XMLHttpRequest();
let moviesdone = 0;

request.open("GET", queryurl, true);

request.onload = function () {
  const response = JSON.parse(this.response);
  console.log(response.results[0]);
  for (let i = 0; i < 20; i++) {
    document.getElementById("moviegrid").insertAdjacentHTML(
      "beforeend",
      `<div class="movie-card">
    <div class="movie-card-front">
      <img
        src="https://image.tmdb.org/t/p/w300/${response.results[i].poster_path}"
        alt=""
        class="poster"
      />
    </div>
    <div class="movie-card-back">
      <h3 class="movie-card-header">${response.results[i].original_title}</h3>
      <div class="score-box">
        <p class="user-score">Community Score</p>
        <p class="user-score">${response.results[i].vote_average}</p>
      </div>

      <div class="release-box">
        <p class="release-date">Released</p>
        <p class="release-date">${response.results[i].release_date}</p>
      </div>

      <div class="movie-genres">        
      </div>
    </div>
  </div>`
    );
/*     let moviegenres = response["genres"];
    for (let x = 0; x < moviegenres.length; x++) {
      let genrezone = document.getElementsByClassName("movie-genres")[i];
      genrezone.insertAdjacentHTML(
        "beforeend",
        `<li class="movie-genre">${moviegenres[x].name}</li>`
      );
    }; */
  };
};
request.send();
