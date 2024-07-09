const input = document.querySelector('input[type="number"]')
const create = document.querySelector('button[data-create]')
const destroy = document.querySelector('button[data-destroy]')
const boxContainer = document.querySelector('#boxes')

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', () => {
  boxContainer.innerHTML = '';
  input.value = ''})

function createBoxes() {
  let amount = input.value;

  if (amount >=1 && amount <= 100) {
    boxContainer.innerHTML = '';
    input.value = '';
    let boxSize = 30;

    const documentFragment = document.createDocumentFragment('div');
    for(let i = 0; i < amount; i+=1) {
      const square = document.createElement('div');
      square.style.width = `${boxSize}px`;
      square.style.height = `${boxSize}px`;
      square.style.backgroundColor = getRandomHexColor();
      documentFragment.appendChild(square);
      boxSize += 10;
    }
    boxContainer.appendChild(documentFragment);
  }
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
