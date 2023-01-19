/* Validate form */
const validateForm = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const cvc = document.getElementById("cvc").value;

  const errorName = document.getElementById("errorName");
  const errorNumber = document.getElementById("errorNumber");
  const errorDate = document.getElementById("errorDate");
  const errorCvc = document.getElementById("errorCvc");

  if (name.length < 5 || name.length > 25) {
    errorName.innerText = "Wrong format, please fill in the field";
  } else {
    errorName.innerText = "";
  }

  if (number.length < 19) {
    errorNumber.innerText = "Wrong format, please fiil in the field";
  } else {
    errorNumber.innerText = "";
  }

  if (month.length < 2 || year.length < 2) {
    errorDate.innerText = "Can't be blank";
  } else {
    errorDate.innerText = "";
  }

  if (cvc.length < 3) {
    errorCvc.innerText = "Can't be blank";
  } else {
    errorCvc.innerText = "";
  }
};

/* Validate name card */
function validateName(event) {
  const regular = `"1234567890!@#$%^&*().,/\\\`~"[]|><{}№;:?\_=+"`;
  if (regular.indexOf(event.key) != -1) event.preventDefault();
}

/* Validate number card */
function validateNumber() {
  const number = document.querySelector("#number");
  const numbers = /[0-9]/;
  const regNumbers = /[0-9]{4}/;

  number.addEventListener("input", (e) => {
    if (e.inputType === "insertText" && !numbers.test(e.data)) {
      number.value = number.value.slice(0, number.value.length - 1);
    }

    const value = number.value;
    if (
      e.inputType === "deleteContentBackward" &&
      regNumbers.test(value.slice(-4))
    ) {
      number.value = number.value.slice(0, number.value.length - 1);
    }

    if (regNumbers.test(value.slice(-4)) && value.length < 19) {
      number.value += " ";
    }
  });
}

function changeForm() {}
