let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let counter = 0
let inputer = document.querySelector(".inputer");

setInterval(() => {
  seconds.textContent = counter += 01
  if(seconds.value > 59) {
    seconds - 60
    minutes + 1
  }
  // inputer.addEventListener("input", (event) => {
  //   let a = inputer.value + counter
  //   console.log(seconds.textContent = a + seconds)
  // }, 1000)
}, 1000)