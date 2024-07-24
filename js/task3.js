let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")
let button4 = document.querySelector(".button4")
let button5 = document.querySelector(".button5")
let points = document.querySelector(".numberClick")
let counter = 0
let clickButton = 0
let clickedScreen = document.querySelector(".clickedScreen")

button1.addEventListener("click", () => {
  points.textContent = clickButton += 10
})
button2.addEventListener("click", () => {
  points.textContent = clickButton += 10
})
button3.addEventListener("click", () => {
  points.textContent = clickButton += 10
})
button4.addEventListener("click", () => {
  points.textContent = clickButton += 10
})
button5.addEventListener("click", () => {
  points.textContent = clickButton += 10
})
const b1 = setInterval(() => {
  let rngNumber = Math.floor((Math.random() * 200) + 1)
  button1.style.position = "absolute"
  button1.style.top = rngNumber + "px"
  button1.style.left = rngNumber + "px"
  button1.addEventListener("click", () => {
    button1.style.color = "white"
    button1.style.backgroundColor = "red"
    clearInterval(b1)
  })
}, 1000)
const b2 = setInterval(() => {
  let rngNumber = Math.floor((Math.random() * 200) + 1)
button2.style.position = "absolute"
button2.style.bottom = rngNumber + "px"
button2.style.left = rngNumber + "px"
button2.addEventListener("click", () => {
  button2.style.color = "white"
  button2.style.backgroundColor = "red"
  clearInterval(b2)
})
}, 1000)
const b3 =setInterval(() => {
  let rngNumber = Math.floor((Math.random() * 200) + 1)
button3.style.position = "absolute"
button3.style.bottom = rngNumber + "px"
button3.style.right = rngNumber + "px"
button3.addEventListener("click", () => {
  button3.style.color = "white"
  button3.style.backgroundColor = "red"
  clearInterval(b3)
})
}, 1000)
const b4 =setInterval(() => {
  let rngNumber = Math.floor((Math.random() * 200) + 1)
button4.style.position = "absolute"
button4.style.bottom = rngNumber + "px"
button4.style.left = rngNumber + "px"
button4.addEventListener("click", () => {
  button4.style.color = "white"
  button4.style.backgroundColor = "red"
  clearInterval(b4)
})
}, 1000)
const b5 =setInterval(() => {
  let rngNumber = Math.floor((Math.random() * 200) + 1)
button5.style.position = "absolute"
button5.style.top = rngNumber + "px"
button5.style.right = rngNumber + "px"
button5.addEventListener("click", () => {
  button5.style.color = "white"
  button5.style.backgroundColor = "red"
  clearInterval(b5)
})
}, 1000)

window.addEventListener("click", (event) => {
  clickedScreen.textContent = counter + 1
  counter++
})