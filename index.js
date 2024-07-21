const inputer = document.querySelector("input")
const form = document.querySelector("form")
const searcher = document.querySelector(".searchStudent")
const button = document.querySelector("button")
import studentsJson from './js/students.json';

console.log(studentsJson)

form.addEventListener("submit", (event) => {
  event.preventDefault("")
  const users = [{
    userName: `${event.target.elements.name1.value}`,
    userAge: `${event.target.elements.age1.value}`,
    userCountry: `${event.target.elements.country1.value}`,
  },{
    userName: `${event.target.elements.name2.value}`,
    userAge: `${event.target.elements.age2.value}`,
    userCountry: `${event.target.elements.country2.value}`
  }]
  const convertJSON = JSON.stringify(users)
  localStorage.setItem("studentsData", convertJSON)
  return users
})
const getLocalData = localStorage.getItem("studentsData")
const transferParse = JSON.parse(getLocalData)
console.log(transferParse)

const students = [
]
console.log(students)

searcher.addEventListener("", (event) => {

})