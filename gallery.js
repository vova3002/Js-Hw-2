const gallery = document.querySelector('.js-gallery')
const lightbox = document.querySelector('.js-lightbox')
const lightboxOverlay = document.querySelector('.lightbox__overlay')
const lightboxImage = document.querySelector('.lightbox__image')
const lightboxCloseButton = document.querySelector('[data-action="close-lightbox"]')

gallery.addEventListener('click', GalleryItemClick)
function GalleryItemClick(event) {

  event.preventDefault()
  const target = event.target

  if (target.nodeName === 'img') {
    return
  }
  const source = target.dataset.source

  lightboxImage.src = source
  lightbox.classList.add('is-open')
  lightboxCloseButton.addEventListener('click', onCloseButtonClick)
  lightboxOverlay.addEventListener('click', onOverlayClick)
  window.addEventListener('keydown', onEscapePress)
}

let closeLightbox = () => {
  lightbox.classList.remove('is-open')
  lightboxImage.src = ''
  lightboxCloseButton.removeEventListener('click', onCloseButtonClick)
  lightboxOverlay.removeEventListener('click', onOverlayClick)
}

let onCloseButtonClick = () => {
  closeLightbox();
}

let onOverlayClick = (event) => {
  if (event.currentTarget === event.target) {
    closeLightbox()
  }
}

let onEscapePress = (event) => {
  if (event.code === 'Escape') {
    closeLightbox()
  }
}