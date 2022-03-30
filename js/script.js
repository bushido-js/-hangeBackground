const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'white'
button.addEventListener('click', changeColor)

function changeColor() {
  const colorIndex = parseInt(Math.random()*colors.length)
  body.style.backgroundColor = colors[colorIndex]
}
