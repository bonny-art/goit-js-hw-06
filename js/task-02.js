const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const liList = [];
ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  liList.push(li);
});

ingredientsListEl.append(...liList);
