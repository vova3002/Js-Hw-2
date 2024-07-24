// let text = document.querySelector("p")
// let number = document.querySelector("span")

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// setInterval(function() {
//   let rngNumber = Math.floor((Math.random() * 200) + 1)
//   let rngNumber2 = Math.floor((Math.random() * 200) + 1)
//   text.style.position = "absolute"
//   number.style.position = "relative"
//   text.style.top = rngNumber + "px"
//   text.style.left = rngNumber + "px"
//   text.style.bottom = rngNumber2 + "px"
//   text.style.right = rngNumber2 + "px"
//   text.style.fontSize = rngNumber + "px"
//   text.style.color = getRandomColor()
//   number.textContent = rngNumber
// }, 1000)