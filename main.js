const submit = document.querySelector("button");
const input = document.querySelector("input");

// <!-- <p class="errorMsg">Please provide a valid email adress</p> -->

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function removeError() {
  const errorMsg = input.nextElementSibling;
  if (errorMsg && errorMsg.classList.contains("errorMsg")) {
    errorMsg.remove();
  }
}

input.addEventListener("focus", () => {
  input.classList.remove("invalid");
  input.style.color = "var(--dark-blue)";
  removeError();
});

submit.addEventListener("click", () => {
  const value = input.value.trim();
  const isEmpty = value === "";

  if (isEmpty || !isValidEmail(value)) {
    input.classList.add("invalid");
    input.style.color = "var(--light-red)";

    const existingError = input.nextElementSibling;
    if (!existingError || !existingError.classList.contains("errorMsg")) {
        const errorMsg = document.createElement("p");
        errorMsg.classList.add("errorMsg");
        errorMsg.innerText = "Please provide a valid email adress";
        input.insertAdjacentElement("afterend", errorMsg);
    }
  }
  else {
    input.classList.remove("invalid");
    removeError();
  }
});
