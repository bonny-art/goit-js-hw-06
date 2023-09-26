const el = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};

el.inputEl.addEventListener('input', handlerNameInput);

function handlerNameInput(evt) {
  el.outputEl.textContent = evt.currentTarget.value.trim()
    ? evt.currentTarget.value.trim()
    : 'Anonymous';
}
