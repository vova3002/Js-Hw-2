let time = document.querySelector(".time")
let clock = document.querySelector(".clock")
let timer = 30

let setTime = setInterval(() => {
  time.textContent = timer -= 1
  if(timer === 10) {
    
  }
  if(timer === 0) {
    clearInterval(setTime)
  }
  if(timer === 0){
    alert("Times out")
  }
}, 100)