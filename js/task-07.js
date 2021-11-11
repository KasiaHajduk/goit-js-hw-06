
const input = document.querySelector("#font-size-control");
const magic = document.querySelector("#text");
magic.style.fontSize = "40px";

input.addEventListener("input", e => {
    magic.style.fontSize = `${input.value}px`;
});