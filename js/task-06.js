const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handlerInputLength);

function handlerInputLength(evt) {
  const value = evt.currentTarget.value.trim().split(' ').join('');

  inputEl.value = value;

  if (value === '') {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
    return;
  }

  if (value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
