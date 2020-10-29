const apikey = "3f608c38cd2f8183bcad8e64c24884f9";
const queryurl = `https://api.themoviedb.org/3/movie/550?api_key=${apikey}&language=en-US&adult=false&sort_by=populatiy.desc&include_video=false&page=1`;
let request = new XMLHttpRequest();

request.open('GET', queryurl, true);
request.onload = function () {
    const response = JSON.parse(this.response);
    console.log(response);
    document.getElementById("moviegrid").insertAdjacentHTML("beforeend",`<div class="movie-card">
    <div class="movie-card-front">
      <img
        src="https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
        alt=""
        class="poster"
      />
    </div>
    <div class="movie-card-back">
      <h3 class="movie-card-header">The Dark Knight</h3>
      <div class="score-box">
        <p class="user-score">Community Score</p>
        <p class="user-score">8.4</p>
      </div>

      <div class="release-box">
        <p class="release-date">Released</p>
        <p class="release-date">2020-06-12</p>
      </div>

      <div class="movie-genres">
        <li class="movie-genre">Sci-Fi</li>
        <li class="movie-genre">Fantasy</li>
        <li class="movie-genre">Horror</li>
      </div>
    </div>
  </div>`);
  };
request.send();