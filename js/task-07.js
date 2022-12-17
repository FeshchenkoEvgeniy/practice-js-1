const inputControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
inputControl.addEventListener("input", (event) => {
    textSpan.style.fontSize = event.currentTarget.value + "px"
});
