const form = document.querySelector(".movie__formRemove")

form.addEventListener("submit", (event) => {
  const idReturn = event.target.elements.movie5.value
  deleteMovie(idReturn)
})

function deleteMovie(remover){
  fetch(`http://localhost:3000/movies/${remover}`, {
    method: "DELETE"
  })
}