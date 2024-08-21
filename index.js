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
    const moviesSctructure = `<li>
    <p>${moviesArray.filmName}</p>
    <img src=${moviesArray.filmImage}>
    <p>${moviesArray.filmDescription}</p>
    </li>`
    return moviesSctructure
  })
  movieLIST.innerHTML = movieHTML
})