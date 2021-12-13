const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


const helloName = () => {
    if (!input.value.length) {
        output.innerHTML = "Anonymous";
    } else {
        output.innerHTML = input.value;
    }
}

input.addEventListener("input", helloName);


// input.addEventListener("input", () => {
//     if (!input.value.length) {
//         output.innerHTML = "Anonymous";
//     } else {
//         output.innerHTML = input.value;
//     }
// });