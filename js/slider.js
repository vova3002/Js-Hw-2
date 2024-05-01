const slider = document.querySelector('.slider__input')
const image = document.querySelector('.slider__image')
const debounce = (time, delay) => {
  let timer
  return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
          time.apply(this, args)
      }, delay)
  }
}
const handler = () => {
  const value = slider.value
  image.style.width = value + '%'
};
const debouncer = debounce(handler, 200)
slider.addEventListener('input', debouncer)