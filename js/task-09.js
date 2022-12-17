const btnChangeColor = document.querySelector(".change-color");
const bodyBackGroundColor = document.querySelector("body");
const changeTextSpan = document.querySelector(".color")

btnChangeColor.addEventListener("click", () => {
  bodyBackGroundColor.style.backgroundColor = getRandomHexColor();
  changeTextSpan.textContent = getRandomHexColor();
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
