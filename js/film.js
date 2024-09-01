const filmEndpoint = "http://localhost:3000/movies"
const movieLIST = document.querySelector(".movie__list")
function getMovie(){
  const filmData = fetch(`${filmEndpoint}`).then((data) => {
    return data.json()
  })
  return filmData
}
getMovie().then((movieData) => {
  const movieHTML = movieData.map((moviesArray) => {
    const moviesSctructure = `<li class="movie__item">
    <p class="movie__id">Id: ${moviesArray.id}</p>
    <p class="movie__title">Title: ${moviesArray.title}</p>
    <p class="movie__genre">Genre: ${moviesArray.genre}</p>
    <p class="movie__director">Director: ${moviesArray.director}</p>
    <p class="movie__year">Year: ${moviesArray.year}</p>
    </li>`
    return moviesSctructure
  })
  movieLIST.innerHTML = movieHTML
})