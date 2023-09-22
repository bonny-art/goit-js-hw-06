const menuEl = document.querySelector('#categories');

console.log(`Number of categories: ${menuEl.children.length}`);

[...menuEl.children].forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
