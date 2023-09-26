const el = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

el.textEl.style.fontSize = '56px';

el.inputEl.addEventListener('input', handlerTextSize);

function handlerTextSize() {
  el.textEl.style.fontSize = `${el.inputEl.value}px`;
}
