let deadline = new Date("dec 31, 2024 15:37:25").getTime();
let nowDate = new Date().getTime();
let time = deadline - nowDate

const daysleft = document.querySelector(".days")
const hoursleft = document.querySelector(".hours")
const minutesleft = document.querySelector(".minutes")
const secondsleft = document.querySelector(".seconds")

const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

let dayNumber = `${days}`
let hoursNumber = `${hours}`
let minutesNumber = `${mins}`
let secondsNumber = `${secs}`

function updateTime() {

console.log(dayNumber)
console.log(secondsNumber)

daysleft.textContent = dayNumber;
hoursleft.textContent = hoursNumber;
minutesleft.textContent = minutesNumber;
secondsleft.textContent = secondsNumber;
secondsNumber ++
}

setInterval(updateTime, 1000);