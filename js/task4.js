const form = document.querySelector("#userform");
const name = document.querySelector("#username");
const lastname = document.querySelector("#userlastname");
const telephone = document.querySelector("#usertelephone");
const email = document.querySelector("#useremail");
const button = document.querySelector("button");


form.addEventListener("submit", (event) => {
  event.preventDefault("")
  console.log(event)
  const saveData = {
    username: event.target.elements.name.value,
    userlastname: event.target.elements.lastname.value,
    usertelephone: event.target.elements.telephone.value,
    useremail: event.target.elements.email.value
  }
  const stringify = JSON.stringify(saveData)
  localStorage.setItem("savedData", stringify)
  console.log(stringify)
  return stringify
})