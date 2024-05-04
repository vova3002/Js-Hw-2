// 1 omg scaler v
const image = document.querySelector(".slider__image")
const input = document.querySelector(".slider__input")
function imageSizer(event) {
    const inputValue = event.target.value;
    const imgSize = 100 + inputValue * 2;
    image.style.width = `${imgSize}px`
    image.style.height = `${imgSize}px`
}
input.addEventListener('input', _.debounce(imageSizer, 500))
// 1 omg ^
// 2

const box = document.querySelector("#box")
function mover(event) {
    box.style.left = `${event.clientX}px`
    box.style.top = `${event.clientY}px`
}
document.addEventListener('mousemove', _.debounce(mover, 100));

// 2