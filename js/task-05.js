const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    if (!input.value.length) {
        output.innerHTML = "Anonymous";
    } else {
        output.innerHTML = input.value;
    }
});