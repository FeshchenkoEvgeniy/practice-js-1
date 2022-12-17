const buttonDecrement = document.querySelector('button[data-action="decrement"]');

const buttonIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const labelText = document.querySelector("#value")

buttonDecrement.addEventListener("click", () => {
        counterValue -= 1;
        labelText.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    labelText.textContent = counterValue;
})