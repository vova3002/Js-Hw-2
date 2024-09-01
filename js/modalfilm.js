const modal = document.querySelector(".movie__remove")
const openButton = document.querySelector(".movie__open")
const closeButton = document.querySelector(".movie__close")
closeButton.addEventListener("click", (event) => {
  modal.classList.add("movie__remove")
})
openButton.addEventListener("click", (event) => {
  modal.classList.remove("movie__remove")
})