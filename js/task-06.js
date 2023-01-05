const inputValidation = document.querySelector("#validation-input")
const inputLength = document.querySelector('input[data-length="6"]');

inputLength.addEventListener("blur" ,() => {
    if(inputLength.value.length >= inputLength.dataset.length){
        inputValidation.classList.remove("invalid");
        inputValidation.classList.add("valid");
    }else{
        inputValidation.classList.remove("valid");
        inputValidation.classList.add("invalid");
    }
})

