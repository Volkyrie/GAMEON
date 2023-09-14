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
const formValidation = document.querySelector('.modal-body input[type="button"]');


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

// Validation of all inputs
formValidation.addEventListener("click", function() {
  var valid = true;
  for(let input of document.querySelectorAll(".formData input")) {
    valid &= input.reportValidity();
    if(!valid) {
      break;
    }
  }
  if(valid) {
    alert("Merci ! Votre réservation a été reçue.");
  }
});