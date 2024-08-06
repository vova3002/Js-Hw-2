let deadline = new Date("dec 31, 2024 15:37:25").getTime();
let nowDate = new Date().getTime();
let time = deadline - nowDate

let daysleft = document.getElementById('1')
let hoursleft = document.getElementById('2')
let minutesleft = document.getElementById('3')
let secondsleft = document.getElementById('4')

function updateTime() {
const now = new Date();

const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

let dayNumber = `${days}`
let hoursNumber = `${hours}`
let minutesNumber = `${mins}`
let secondsNumber = `${secs}`

daysleft.textContent = dayNumber;
hoursleft.textContent = hoursNumber;
minutesleft.textContent = minutesNumber;
secondsleft.textContent = secondsNumber;

}

setInterval(updateTime, 1000);