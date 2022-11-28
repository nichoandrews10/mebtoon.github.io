// Get data
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phone-number");
const countryInput = document.querySelector("#country");
const errorNodes = document.querySelectorAll(".error")

const btn = document.getElementsByClassName("submit");
const checkboxTnc = document.getElementById("dot-1");

// Data Validation
function validateForm() {

    clearMessages();

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailIsValid(emailInput.value)) {
        errorNodes[1].innerText = "Invalid email address";
        emailInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!phoneNoIsValid(phoneNumberInput.value)) {
        errorNodes[2].innerText = "Please enter a valid phone number";
        phoneNumberInput.classList.add("error-border");
        errorFlag = true;
    }

    if (countryInput.value.length < 1) {
        errorNodes[3].innerText = "Please enter your country";
        countryInput.classList.add("error-border");
        errorFlag = true;
    }


    if (checkboxTnc.checked == false) {
        errorNodes[4].innerText = "Please agree to our terms and conditions";
    }

    if (!errorFlag) {
        success.innerText = "Success!";
    }
}

// Clear Error
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    phoneNumberInput.classList.remove("error-border");
    countryInput.classList.remove("error-border");
}

// Email Validation
function emailIsValid(emailInput) {
    let emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(emailInput);
}

// Phone Number Validation
function phoneNoIsValid(phoneNumberInput) {
    let phonePattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return phonePattern.test(phoneNumberInput);
}