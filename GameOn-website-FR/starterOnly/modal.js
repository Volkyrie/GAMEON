function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalSpan = document.querySelectorAll(".close");
const formValidation = document.getElementById("formID");
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const btnRadio = document.querySelectorAll("input[name='location']");
const btnCheck = document.getElementById("checkbox1");
const errorMsg = document.querySelectorAll(".error");

// List of character accepted
const onlyLetters = new RegExp(/[a-zA-Z-]{2,}/i);
const emailPattern = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
const onlyNumbers = new RegExp(/[0-9]{1,}/);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Close modal event
modalSpan.forEach((span) => span.addEventListener("click", closeModal));

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Check if date is OK
function checkDate() {
  let setDate = new Date (dateInput.value);
  let currentDate = new Date ();
  let age = currentDate.getFullYear() - setDate.getFullYear();

  if(age >= 18) {
    return true;
  }
  return false;
}

// Check if at least 1 radio is selected
btnRadio.forEach((checkedBoxInput) => checkedBoxInput.addEventListener("change", () => {
  checkRadiobox();
}));

function checkRadiobox() {
  for (var i = 0; i < btnRadio.length; i++) {
    if (btnRadio[i].checked){
      return true;
    }
  }
  return false;
}

// Validation of all inputs
formValidation.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!firstInput.value.match(onlyLetters)) {
    errorMsg[0].innerHTML = "Syntaxe du prénom incorrecte";
  }
  else if(!lastInput.value.match(onlyLetters)) {
    errorMsg[1].innerHTML = "Syntaxe du nom incorrecte";
    errorMsg[0].innerHTML = "";
  }
  else if(!emailInput.value.match(emailPattern)) {
    errorMsg[2].innerHTML = "Syntaxe de l'email incorrecte";
    errorMsg[1].innerHTML = "";
  }
  else if(!checkDate()) {
    errorMsg[3].innerHTML = "Date incorrecte";
    errorMsg[2].innerHTML = "";
  }
  else if(!quantityInput.value.match(onlyNumbers)) {
    errorMsg[4].innerHTML = "Veuillez entrer un nombre";
    errorMsg[3].innerHTML = "";
  }
  else if(!checkRadiobox()) {
    errorMsg[5].innerHTML = "Veuillez sélectionner un lieu";
    errorMsg[4].innerHTML = "";
  }
  else if(!btnCheck.checked){
    errorMsg[6].innerHTML = "Veuillez cocher cette case";
    errorMsg[5].innerHTML = "";
  }
  else {
    for(var i=0; i < 7; i++) {
      errorMsg[i].innerHTML = "";
    }
    formValidation.reset();
    alert("Merci ! Votre réservation a été reçue.");
    closeModal();
  }
});

firstInput.value.match(onlyLetters)