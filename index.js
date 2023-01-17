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

  if (name.length < 5 || name.length > 20) {
    errorName.innerText = "Wrong format, please fill in the field";
  } else {
    errorName.innerText = "";
  }

  if (number.length < 16) {
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

function changeForm() {}
