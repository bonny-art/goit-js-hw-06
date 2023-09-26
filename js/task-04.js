const elements = {
  counterEl: document.querySelector('#counter'),
  displayEl: document.querySelector('#value'),
  decrementEl: document.querySelector('button[data-action="decrement"]'),
  incrementEl: document.querySelector('button[data-action="increment"]'),
};

elements.decrementEl.addEventListener('click', handlerDecrement);
elements.incrementEl.addEventListener('click', handlerIncrement);

let counterValue = 0;

function handlerDecrement() {
  counterValue -= 1;
  elements.displayEl.textContent = counterValue;
}

function handlerIncrement() {
  counterValue += 1;
  elements.displayEl.textContent = counterValue;
}
