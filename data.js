import {infoTemp} from "./template/template.hbs"
console.log(infoTemp)

const list = document.querySelector("ul")
const data = [
  { name: 'vova', age: 30, occupation: 'developer' },
  { name: 'michael', age: 25, occupation: 'designer' }
]

const constructHtml = data.map((data) => {
  constructor = `  <li>
  <p>${data.name}</p>
  <p>${data.age}</p>
  <p>${data.occupation}</p>
</li>`
return constructor
}).join("")
list.insertAdjacentHTML("beforebegin", constructHtml)