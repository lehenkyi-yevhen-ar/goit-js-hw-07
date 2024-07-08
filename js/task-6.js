const input = document.querySelector('input[type="number"]')
const create = document.querySelector('button[data-create]')
const destroy = document.querySelector('button[data-destroy]')
const boxContainer = document.querySelector('#boxes')

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', () => {
  boxContainer.innerHTML = ''})
destroy.addEventListener('click', () => {
  input.value = ''})

function createBoxes() {
  let amount = input.value;

  if (amount >=1 && amount <= 100) {
    boxContainer.innerHTML = '';
    let boxSize = 30;
    for(let i = 0; i < amount; i+=1) {
      const square = document.createElement('div');
      square.style.width = `${boxSize}px`;
      square.style.height = `${boxSize}px`;
      square.style.backgroundColor = getRandomHexColor();
      boxContainer.appendChild(square);
      boxSize += 10;
    }
  }
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
