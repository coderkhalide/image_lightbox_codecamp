const images = document.querySelectorAll('.image')
const popup = document.querySelector('.popup')
const popupImg = document.querySelector('.popup img')
const popupClose = document.querySelector('.popup a')
const backdrop = document.querySelector('.backdrop')

images.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        popup.classList.add('activePopup')
        backdrop.classList.add('active')

        popupImg.setAttribute('src', e.target.src)
    })
})

popupClose.addEventListener('click', (e) => {
    popup.classList.remove('activePopup')
    backdrop.classList.remove('active')
})