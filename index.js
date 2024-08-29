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
    return imgHTML
    })
      ulList.innerHTML = mapArrayHTML
    })
})
function getFetch() {
  const fetcher = fetch(`https://pixabay.com/api/?key=43028857-0f1ea2a07ec80ac5b3d9eeb9b&page=${currentPage}&?limit=16`).then((data) => data.json())
  return fetcher
}
getFetch().then((data) => {
  const mapArrayHTML = data.hits.map((mapArray) => {
    console.log(mapArray)
  let imgHTML = `<li class="pixabay__item">
  <p class="pixabay__id">Id: ${mapArray.id}</p>
  <p class="pixabay__likes">Likes: ${mapArray.likes}</p>
  <img class="pixabay__img" src=${mapArray.userImageURL}>
  </li>`
  return imgHTML
  })
    ulList.innerHTML = mapArrayHTML
  })