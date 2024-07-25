let timeButton = document.querySelector("button")
let timer = document.querySelector("span")
let time = 3600
let text = document.querySelector("h1")

let times = setInterval(() => {
  timer.textContent = time -= 1
  if(time < 1800) {
    text.classList.remove("hide")
  }
  if(time === 0) {
    clearInterval(times)
  }
}, 1000)

timeButton.addEventListener("click", () => time -= 600)