const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");
const elements = [];

for (const ingredient of ingredients) {
  const el = document.createElement("li");
  el.textContent = ingredient;
  el.classList.add("item");
  elements.push(el);
}

list.append(...elements);
