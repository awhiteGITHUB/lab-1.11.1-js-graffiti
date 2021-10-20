let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
   dogNames[i].style.textAlign = "left"

}

let dogRotate = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogRotate.length; i++){
dogRotate[i].style.transform = "rotate(180deg)"
}

let footer = document.querySelector('.footer')
footer.style.color = 'blue'

let footer1 = document.querySelector('.footer')
footer1.style.borderStyle = 'solid'

let footer2 = document.querySelector('.footer')
footer2.style.textAlign = "center"


// Select some elements...