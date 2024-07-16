const github = document.querySelector(".github");
const youtube = document.querySelector(".youtube");
const npm = document.querySelector(".npmjs");
const links = document.querySelectorAll("a")

github.addEventListener("click", (event) => {
  localStorage.setItem("github", "Clicked github")
  localStorage.getItem("youtube")
  localStorage.getItem("npm")
  localStorage.removeItem("youtube")
  localStorage.removeItem("npm")
})
youtube.addEventListener("click", (event) => {
  localStorage.setItem("youtube", "Clicked youtube")
  localStorage.getItem("github")
  localStorage.getItem("npm")
  localStorage.removeItem("github")
  localStorage.removeItem("npm")
})
npm.addEventListener("click", (event) => {
  localStorage.setItem("npm", "Clicked npm")
  localStorage.getItem("youtube")
  localStorage.getItem("github")
  localStorage.removeItem("youtube")
  localStorage.removeItem("github")
})