const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handlerFormSubmit);

function handlerFormSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  const userData = {
    email: email.value,
    password: password.value,
  };

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(userData);

  evt.currentTarget.reset();
}
