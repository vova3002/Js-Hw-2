// const username1 = document.querySelector("#1")
// const userage1 = document.querySelector("#2")
// const usercountry1 = document.querySelector("#3")
// const username2 = document.querySelector("#4")
// const userage2 = document.querySelector("#5")
// const usercountry2 = document.querySelector("#6")
const inputer = document.querySelector("input")
const form = document.querySelector("form")
const searcher = document.querySelector(".searchStudent")
const button = document.querySelector("button")

form.addEventListener("submit", (event) => {
  event.preventDefault("")
  const objectUser = {
    username1: `${event.target.elements.name1.value}`,
    userage1: `${event.target.elements.age1.value}`,
    usercountry1: `${event.target.elements.country1.value}`,
    username2: `${event.target.elements.name2.value}`,
    userage2: `${event.target.elements.age2.value}`,
    usercountry2: `${event.target.elements.country2.value}`,
  }
  const convertJSON = JSON.stringify(objectUser)
  localStorage.setItem("studentsData", convertJSON)
  return objectUser
})
const getLocalData = localStorage.getItem("studentsData")
const transferParse = JSON.parse(getLocalData)
const a = transferParse.
console.log(transferParse)

const students = [
  {
    user: `${transferParse}`,
    age: `${transferParse}`,
    country: `${transferParse}`
  },
  // {
  //   user: "",
  //   age: "",
  //   country: ""
  // }
]
console.log(students)

searcher.addEventListener("", (event) => {

})