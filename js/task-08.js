const rightEmail = "";
const rightPassword = "";
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const emailValue = formElements.email.value;
    const passwordValue = formElements.password.value;

    if (emailValue == "" || passwordValue == "") {
      return alert("Fill up all the forms")
    }
    console.log({
        elementsEmail: rightEmail,
        elementsPassword: rightPassword,
      });
    }
