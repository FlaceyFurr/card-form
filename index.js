/* Validate form */
const validateForm = (e) => {
  e.preventDefault();

  let checkError = true;

  const name = document.querySelector("#cardName");
  const number = document.querySelector("#number");
  const month = document.querySelector("#month");
  const year = document.querySelector("#year");
  const cvc = document.querySelector("#cvc");

  const nameValue = document.querySelector("#cardName").value;
  const numberValue = document.querySelector("#number").value;
  const monthValue = document.querySelector("#month").value;
  const yearValue = document.querySelector("#year").value;
  const cvcValue = document.querySelector("#cvc").value;

  const errorName = document.querySelector("#errorName");
  const errorNumber = document.querySelector("#errorNumber");
  const errorDate = document.querySelector("#errorDate");
  const errorCvc = document.querySelector("#errorCvc");

  if (nameValue.length < 5 || nameValue.length > 25) {
    errorName.innerText = "Wrong format, please fill in the field";
    name.style.borderColor = "red";
    checkError = false;
  } else {
    errorName.innerText = "";
    name.style.borderColor = null;
  }

  if (numberValue.length < 19) {
    errorNumber.innerText = "Wrong format, please fiil in the field";
    number.style.borderColor = "red";
    checkError = false;
  } else {
    errorNumber.innerText = "";
    number.style.borderColor = null;
  }

  if (monthValue.length < 2 || monthValue > 12) {
    errorDate.innerText = "Can't be blank";
    month.style.borderColor = "red";
    checkError = false;
  } else {
    errorDate.innerText = "";
    month.style.borderColor = null;
  }

  if (yearValue.length < 2) {
    errorDate.innerText = "Can't be blank";
    year.style.borderColor = "red";
    checkError = false;
  } else {
    errorDate.innerText = "";
    year.style.borderColor = null;
  }

  if (cvcValue.length < 3) {
    errorCvc.innerText = "Can't be blank";
    cvc.style.borderColor = "red";
    checkError = false;
  } else {
    errorCvc.innerText = "";
    cvc.style.borderColor = null;
  }

  return checkError;
};

/* Validate name card */
function validateName(event) {
  const regular = `"1234567890!@#$%^&*().,/\\\`~"[]|><{}???;:?\_=+"`;
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

/* Return result to card */
document.getElementById("number").addEventListener("input", () => {
  const numberResult = document.querySelector("#numberResult");
  const defaultNumber = "0000 0000 0000 0000";

  if (number.value == "") {
    numberResult.innerText = defaultNumber;
  } else {
    numberResult.innerText = event.target.value;
  }
});

document.getElementById("cardName").addEventListener("input", () => {
  const nameResult = document.querySelector("#nameResult");
  const defaultName = "jane appleseed";

  if (cardName.value == "") {
    nameResult.innerText = defaultName;
  } else {
    nameResult.innerText = event.target.value;
  }
});

document.getElementById("month").addEventListener("input", () => {
  const monthResult = document.querySelector("#monthResult");
  const defaultMonth = "00";

  if (month.value == "") {
    monthResult.innerText = defaultMonth;
  } else {
    monthResult.innerText = event.target.value;
  }
});

document.getElementById("year").addEventListener("input", () => {
  const yearResult = document.querySelector("#yearResult");
  const defaultYear = "00";

  if (year.value == "") {
    yearResult.innerText = defaultYear;
  } else {
    yearResult.innerText = event.target.value;
  }
});

document.getElementById("cvc").addEventListener("input", () => {
  const cvcResult = document.querySelector("#cvcResult");
  const defaultCvc = "000";

  if (cvc.value == "") {
    cvcResult.innerText = defaultCvc;
  } else {
    cvcResult.innerText = event.target.value;
  }
});

function changeForm() {
  if (validateForm(event) === true) {
    document.querySelector(".input-section").classList.remove("active");
    document.querySelector(".input-section").classList.add("inactive");
    document.querySelector(".success-section").classList.remove("inactive");
    document.querySelector(".success-section").classList.add("active");
  }
}

function returnForm() {
  document.querySelector(".input-section").classList.remove("inactive");
  document.querySelector(".input-section").classList.add("active");
  document.querySelector(".success-section").classList.remove("active");
  document.querySelector(".success-section").classList.add("inactive");
}
