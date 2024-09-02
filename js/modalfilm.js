const modal = document.querySelector(".movie__remove")
const openButton = document.querySelector(".movie__open")
const closeButton = document.querySelector(".movie__close")
const modalUpdate = document.querySelector(".movie__hidden")
const closeButtonUpdate = document.querySelector(".movie__closeUpdate")
const openButtonUpdate = document.querySelector(".movie__openUpdate")
closeButton.addEventListener("click", (event) => {
  modal.classList.add("movie__remove")
})
openButton.addEventListener("click", (event) => {
  modal.classList.remove("movie__remove")
})
closeButtonUpdate.addEventListener("click", (event) => {
  modalUpdate.classList.add("movie__hidden")
})
openButtonUpdate.addEventListener("click", (event) => {
  modalUpdate.classList.remove("movie__hidden")
})