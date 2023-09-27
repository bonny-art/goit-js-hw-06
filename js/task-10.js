const controls = document.querySelector('#controls');
const buttonCreate = controls.querySelector('button[data-create]');
const buttonDestroy = controls.querySelector('button[data-destroy]');
const input = controls.querySelector('input');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', handlerCreate);
buttonDestroy.addEventListener('click', handlerDestroy);

function handlerCreate() {
  boxes.insertAdjacentHTML('beforeend', createBoxes(input.value));
  input.value = '';
}

function handlerDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  let boxes = '';
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    boxes += `<div style="  
    width: ${30 + 10 * i}px; 
    height: ${30 + 10 * i}px; 
    background-color: ${color}" ></div>`;
  }

  return boxes;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
