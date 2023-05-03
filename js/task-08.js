const rightEmail = "";
const rightPassword = "";
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const emailValue = loginForm.elements.email.value;
    const passwordValue  = loginForm.elements.password.value;

    if (emailValue == "" || passwordValue == "") {
      return alert("Fill up all the forms")
    }
    console.log({
        elementsEmail: emailValue,
        elementsPassword: passwordValue,
      });
      loginForm.reset();
    }
