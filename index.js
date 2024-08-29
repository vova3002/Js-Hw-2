let currentPage = 1
const button = document.querySelector("button")
const ulList = document.querySelector(".pixabay__list")
button.addEventListener("click", () => {
  currentPage += 1
  getFetch().then((data) => {
    const mapArrayHTML = data.hits.map((mapArray) => {
      console.log(mapArray)
    let imgHTML = `<li class="pixabay__item">
    <p class="pixabay__id">Id: ${mapArray.id}</p>
    <p class="pixabay__likes">Likes: ${mapArray.likes}</p>
    <img class="pixabay__img" src=${mapArray.userImageURL}>
    </li>`
    return imgHTML
    })
      ulList.innerHTML = mapArrayHTML
    })
})
function getFetch() {
  const fetcher = fetch(`https://pixabay.com/api/?key=43028857-0f1ea2a07ec80ac5b3d9eeb9b&page=${currentPage}&?limit=16`).then((data) => data.json())
  return fetcher
}
getFetch().then((data) => {
  const mapArrayHTML = data.hits.map((mapArray) => {
    console.log(mapArray)
  let imgHTML = `<li class="pixabay__item">
  <p class="pixabay__id">Id: ${mapArray.id}</p>
  <p class="pixabay__likes">Likes: ${mapArray.likes}</p>
  <img class="pixabay__img" src=${mapArray.userImageURL}>
  </li>`
  return imgHTML
  })
    ulList.innerHTML = mapArrayHTML
  })