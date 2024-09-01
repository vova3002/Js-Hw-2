const form = document.querySelector(".movie__form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const movieTitle = event.target.elements.movie1.value
  const movieGenre = event.target.elements.movie2.value
  const movieDirector = event.target.elements.movie3.value
  const movieYear = event.target.elements.movie4.value
  const movieObject = {
    title: movieTitle,
    genre: movieGenre,
    director: movieDirector,
    year: movieYear
  }
  movieAdd(movieObject)
  console.log(movieObject)
})
function movieAdd(movieObject){
  const options = {
    method: "POST",
    body: JSON.stringify(movieObject)
  }
  const moviePost = fetch("http://localhost:3000/movies", options).then((fetchData) => {
    
  })
}