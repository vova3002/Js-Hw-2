let time = document.querySelector(".time")
let clock = document.querySelector(".clock")
let timer = 30

let setTime = setInterval(() => {
  let rngNumber = Math.floor(Math.random() * 100) + 1;
  let rngNumber2 = Math.floor(Math.random() * 100) + 1;
  let rngNumber3 = Math.floor(Math.random() * 100) + 1;
  console.log(rngNumber)
  time.textContent = timer -= 1
  if(timer < 10){
    clock.style.position = "absolute"
    time.style.position = "relative"
    clock.style.top = rngNumber + "px"
    clock.style.left = rngNumber2 + "px"
    clock.style.right = rngNumber3 + "px"
    clock.style.fontSize = rngNumber + "px"
  }
  if(timer === 0){
    clearInterval(setTime)
  }
  if(timer === 0){
    alert("Times out")
  }
}, 1000)