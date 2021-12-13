function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');

const inputparent = document.querySelector("#controls");
const input = inputparent.children[0];
const parent = document.querySelector("#boxes");


const createColection = () => {
  const amount = input.value;
  const sizes = [];
  for (let i = 0; i < amount; i++) {
    sizes[i] = 30 + i * 10;
  }

  const squares = sizes
    .map((square) => `<div id="in"style="background-color:${getRandomHexColor()}; width:${square}px; height:${square}px;"></div>`)
    .join("");
  parent.insertAdjacentHTML("beforeend", squares);

};
  
  
const destroyColection = () => {
  const div = document.querySelectorAll("#in");
  div.forEach(el => {
    el.remove();
  });
}
  
create.addEventListener("click", createColection);
destroy.addEventListener("click", destroyColection);


// create.addEventListener("click", () => {
//   const amount = input.value;
//   const sizes = [];

//   for (let i = 0; i < amount; i++) {
//     sizes[i] = 30 + i * 10;
//   }

//   const squares = sizes
//     .map((square) => `<div id="in"style="background-color:${getRandomHexColor()}; width:${square}px; height:${square}px;"></div>`)
//     .join("");
//   parent.insertAdjacentHTML("beforeend", squares);
// });


// destroy.addEventListener("click", () => {
//   const div = document.querySelectorAll("#in");
//   div.forEach(el => {
//     el.remove();
//   });
// });


