const form  = document.getElementsByTagName('form')[0];

const title = document.createElement('div'); 
title.innerHTML = "Sign Up For a Free Compliment."
title.className = "title"; 
form.prepend(title); 

const email = document.querySelector('#mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {

    if (email.validity.typeMismatch) {
        email.className = "invalid";
        emailError.textContent = "Enter Valid Email";
    }

    else if (email.validity.typeMismatch == false) {
        email.className = "valid";
        emailError.textContent = ""; 
        if (email.value == "") {
            email.className = ""; 
        }
    }
})

const country = document.querySelector('#country'); 
const cError = document.querySelector('#country + span.errorC');

country.addEventListener('input', function (event) {

    if (country.validity.tooShort) {
        country.className = "invalid";
        cError.textContent = "Country Must Be 3 Letters"; 
    }

    else if (country.validity.tooShort == false) {
        country.className = "valid";
        cError.textContent = ""; 
        if (country.value == "") {
            country.className = ""; 
        }
    }
})

const zip = document.querySelector('#zip');
const errorZ = document.querySelector('#zip + span.errorZ'); 

zip.addEventListener('input', function (event) {

    if (zip.validity.rangeOverflow == true || zip.validity.rangeUnderflow == true) {
        zip.className = "invalid";
        errorZ.textContent = "Enter Valid ZipCode"; 
    }

    else if (zip.validity.tooShort == false) {
        zip.className = "valid";
        errorZ.textContent = ""; 
        if (zip.value == "") {
            zip.className = "user"; 
        }
    }
})

const pass = document.querySelector('#pass');
const errorP = document.querySelector('#pass + span.errorP'); 

pass.addEventListener('input', function (event) {

    if (pass.validity.tooShort == true) {
        pass.className = "invalid";
        errorP.textContent = "Password must contain 6 characters"; 
    }

    else if (pass.validity.tooShort == false) {
        pass.className = "valid";
        errorP.textContent = ""; 
        if (pass.value == "") {
            pass.className = "user"; 
        }
    }
})

const passc = document.querySelector('#passc');
const errorPc = document.querySelector('#passc + span.errorPc'); 

passc.addEventListener('input', function (event) {

    if (passc.validity.tooShort == true) {
        passc.className = "invalid";
        errorPc.textContent = "Password must contain 6 characters"; 
    }

    else if (passc.validity.tooShort == false) {
        passc.className = "valid";
        errorPc.textContent = ""; 
        if (passc.value === "") {
            passc.className = "user"; 
        }
    }

    if (passc.value != pass.value) {
        passc.className = "invalid";
        errorPc.textContent = "Passwords does not match";
        if (passc.value == "") {
            passc.className = "user"; 
        }
    }
})

form.addEventListener('submit', (event) => {
    if (email.className == "invalid" || country.className == "invalid" || zip.className == "invalid" || pass.className == "invalid" || passc.className == "invalid") {
        event.preventDefault();
    }
    if (email.className == "user" || country.className == "user" || zip.className == "user" || pass.className == "user" || passc.className == "user") {
        event.preventDefault();
        alert("why'd you leave that blank? You trying to break my program??")
    }
    if (email.className == "valid" && country.className == "valid" && zip.className == "valid" && pass.className == "valid" && passc.className == "valid") {
        alert("I like your shirt."); 
    }
})
