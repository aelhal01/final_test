// Get data
const.nameInput1 = document.querySelector("#fname");
const.nameInput2 = document.querySelector("#lname");
const.email = document.querySelector("#email");
const.nameInput = document.querySelector("#name");
const.errorNodes = document.querySelectorAll("#error");

// Validate data
function validateForm() {
  if (nameInput1.value.length < 1) {
    errorNodes[0].innerText = "First Name cannot be blank";
    nameInput1.classList.add("error-border");
  }
}

// Clear errors
function clearMessages() {
  for(let i = 0, i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput1.classList.remove("error-border");
}
