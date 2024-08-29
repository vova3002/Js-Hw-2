const filmEndpoint = "http://localhost:3000/film"
const movieLIST = document.querySelector(".movie__list")

function getMovie(){
  const filmData = fetch(`${filmEndpoint}`).then((data) => {
    console.log(data)
    return data.json()
  })
  return filmData
}

getMovie().then((movieData) => {
  const movieHTML = movieData.map((moviesArray) => {
    console.log(movieData)
    const moviesSctructure = `<li class="movie__item">
    <p class="movie__name">${moviesArray.filmName}</p>
    <img class="movie__img" src=${moviesArray.filmImage}>
    <p class="movie__description">${moviesArray.filmDescription}</p>
    </li>`
    return moviesSctructure
  })
  movieLIST.innerHTML = movieHTML
})