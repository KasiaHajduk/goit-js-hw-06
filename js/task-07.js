
const input = document.querySelector("#font-size-control");
const magic = document.querySelector("#text");
magic.style.fontSize = "40px";


const magicSize = () => magic.style.fontSize = `${input.value}px`;
    
input.addEventListener("input", magicSize);

// input.addEventListener("input", e => {
//     magic.style.fontSize = `${input.value}px`;
// });