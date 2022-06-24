const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const isIngredients = document.querySelector('#ingredients');

const isNameIngredients = ingredients.map(gradient  => {
  const isNewIngredient = document.createElement('li');
  isNewIngredient.classList.add('js-item');
  isNewIngredient.textContent = gradient;
  return isNewIngredient;
});
 isIngredients.append(...isNameIngredients);
