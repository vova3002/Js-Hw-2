// import "./test.js"
// import "./test2.js"
// import { array } from "./test2.js"
// console.log(array.findIndex(1))
const button = document.querySelector(".feedback__button")
const form = document.querySelector(".feedback__form")
const namer = document.querySelector(".feedback__name")
const email = document.querySelector(".feedback__email")
const message = document.querySelector(".feedback__message")

const formSave = {
  name: `${namer.value}`,
  email: `${email.value}`,
  message: `${message}`
}
button.addEventListener("click", (event) => {
  alert("Ви успішно відправили дані")
})
console.log(formSave)
form.addEventListener("submit", function(event) {
event.defaultPrevented()
})