const form = document.querySelector("form")
let data = document.getElementById("6")
const button = document.querySelector("button")

form.addEventListener("submit", (event) => {
  event.preventDefault("")
  console.log(event)
  const input = {
    data: event.target.elements.data.value
  }
  const stringify = JSON.stringify(input)
  localStorage.setItem("message", stringify)
  console.log(stringify)
  return stringify
})

const saveInputer = localStorage.getItem("message")
const save = JSON.parse(saveInputer)
data.value = save.data