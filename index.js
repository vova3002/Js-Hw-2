const form = document.querySelector("form")
const searcher = document.getElementById("search")
import studentsJson from './js/students.json';

console.log(...studentsJson)

form.addEventListener("submit", (event) => {
  event.preventDefault("")
  console.log('submit')
  const users = {
    userId: `user${studentsJson.length + 1}`,
    userName: event.target.elements.name.value,
    userAge: event.target.elements.age.value,
    userCountry: event.target.elements.country.value,
  }
  
  const convertJSON = JSON.stringify([...studentsJson, users])
  localStorage.setItem("studentsData", convertJSON)
  return users
})

const getLocalData = localStorage.getItem("studentsData")
const transferParse = JSON.parse(getLocalData)
console.log(transferParse)

searcher.addEventListener("input", (event) => {
  const inputValue = event.target.value
  const inputFinder = transferParse.find((student) => {
    if(student.userName === inputValue) {
      alert("Ви віли дані студента")
    } else {
      
    }
  })
  console.log(inputFinder)
})