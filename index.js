
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = "left"
header.style.fontFamily = "arial"
header.style.color = "black"
let dogImages = document.querySelectorAll('.dog-image')
for (let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'scaleY(-1)'

}
let dogNames = document.querySelectorAll('.dog-name')
for (let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'

}
let footer = document.querySelector('.footer')
footer.style.color = "pink";