let getFactButton = document.getElementById('add-fact')
getFactButton.addEventListener('click', function() {
 let facts = document.getElementById('facts')
 let newFact = prompt('Enter a new fact:')
 let createListItem = document.createElement('li')
 createListItem.textContent = newFact
 facts.appendChild(createListItem)
})

// Image Slider
let images = ['images/Lion1.jpg','images/Lion2.jpg','images/Lion3.jpg'] // array
let currentIndex = 0

function changeImage(direction) { // Tool to use to complete a specific task
  if (direction == 'next') {
    currentIndex = (currentIndex + 1) % images.length
  }
  // Make an if-statement that uses 'prev' to go backwards
   if (direction == 'prev') {
     currentIndex = (currentIndex - 1 + Image.length) % images.length
   }
  let picture = document.getElementById('picture')
  picture.src = images[currentIndex]
}

// Event listeners for left and right arrows
document.getElementById('left').addEventListener('click', function() {
  changeImage('prev')
})

document.getElementById('right').addEventListener('click', function() { changeImage('next')
})