const buttonSub = document.querySelector('[data-action="decrement"]');
const buttonAdd = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const counter = document.querySelector("span");

buttonSub.addEventListener("click", () => {
    counterValue -= 1;
    counter.innerHTML = counterValue;
});

buttonAdd.addEventListener("click", () => {
    counterValue += 1;
    counter.innerHTML = counterValue;
});



