function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");

body.addEventListener("click", () => {
  const spanColor = document.querySelector(".color");
  spanColor.innerHTML = body.style.backgroundColor = getRandomHexColor();
});
