/*Script to change design input*/
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

const formSection = document.getElementById("form-section");
const subscribeSection = document.getElementById("suscribe-section");

document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add("error");
        errorMessage.style.opacity = "1";
    } else {
        errorMessage.style.opacity = 0;
        formSection.style.display = "none";
        subscribeSection.style.display = "block";
    }
});

document.getElementById("email").addEventListener("input", function () {
    emailInput.classList.remove("error");
    errorMessage.style.opacity = 0;
});

const returnBtn = document.querySelector(".return-btn");
returnBtn.addEventListener("click", function () {
    formSection.style.display = "flex";
    subscribeSection.style.display = "none"; 
});