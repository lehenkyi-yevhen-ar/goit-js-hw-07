const body = document.querySelector('body')
const button = document.querySelector('.change-color')
const colorSpan = document.querySelector('.color')



button.addEventListener('click', colorChange);

function colorChange(event){
  const color = getRandomHexColor();
  colorSpan.textContent = color;
  body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
