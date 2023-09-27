const el = {
  button: document.querySelector('.change-color'),
  text: document.querySelector('.color'),
  body: document.querySelector('body'),
};

el.button.addEventListener('click', handlerClick);

function handlerClick() {
  const color = getRandomHexColor();

  el.text.textContent = color;
  el.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
