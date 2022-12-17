const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');
ingredients.map((ingredient) => {
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = ingredient;
  ulEl.append(liElement);
});
console.log(ulEl);



// const firstElement = document.createElement('li');
// firstElement.textContent = ingredients[0];
// firstElement.classList.add('item')

// const secondElement = document.createElement('li');
// secondElement.textContent = ingredients[1];
// secondElement.classList.add('item')

// const thirdElemnt = document.createElement('li');
// thirdElemnt.textContent = ingredients[2];
// thirdElemnt.classList.add('item')

// const fourthElement = document.createElement('li');
// fourthElement.textContent = ingredients[3];
// fourthElement.classList.add('item')

// const fifthElement = document.createElement('li');
// fifthElement.textContent = ingredients[4];
// fifthElement.classList.add('item')

// const sixthElement = document.createElement('li');
// sixthElement.textContent = ingredients[5];
// sixthElement.classList.add('item')

// ulEl.append(firstElement,secondElement,thirdElemnt,fourthElement,fifthElement,sixthElement)

// console.log(ulEl);