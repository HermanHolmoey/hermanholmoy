const firstName = document.querySelector("#firstName");
const valueError = document.querySelector("#firstNameError");

firstName.addEventListener("keyup", firstNameLength);

function firstNameLength(event) {
    const firstNameValue = event.target.value;
    const valueLength = firstNameValue.length;
    
    if (valueLength > 2) {
        valueError.style.display = "none";
    }
    else {
        valueError.style.display = "block";
    }
}