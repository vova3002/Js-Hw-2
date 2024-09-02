const form = document.querySelector(".movie__formUpdate");
const takeId = document.querySelector(".movie__update");

form.addEventListener("submit", (event) => {
  const idHTML =  event.target.elements.movie5.value

  const movieTitle = event.target.elements.movie6.value
  const movieGenre = event.target.elements.movie7.value
  const movieDirector = event.target.elements.movie8.value
  const movieYear = event.target.elements.movie9.value
  const movieObject = {
    id: idHTML,
    title: movieTitle,
    genre: movieGenre,
    director: movieDirector,
    year: movieYear
  }
  console.log(movieObject)
  updateCard(movieObject)
})
function updateCard(object){
  const options = {
    method: "PATCH",
    body: JSON.stringify(object)
  }
  fetch(`http://localhost:3000/movies/${object.id}`, options).then((response => response.json()))
}