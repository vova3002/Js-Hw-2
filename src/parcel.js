const form = document.querySelector(".form")
form.addEventListener("submit", (e) => {
e.preventDefault()
const name = e.target.elements.name.value
const email = e.target.elements.email.value
const message = e.target.elements.message.value
// console.log(name, email, message)
const namer = {
  namer: `${name}`,
  emailer: `${email}`,
  messager: `${message}`
}
})