const getFirstName = document.getElementById("input-first-name");
const getLastName = document.getElementById("input-last-name");
const getUsername = document.getElementById("input-username");
const getPassword = document.getElementById("input-password");
const getConfirmPassword = document.getElementById("input-confirm-password");
const getBirthday = document.getElementById("input-birthday");
const getNewsletter = document.getElementById("input-check-newsletter");
const submitButton = document.getElementById("button-submit");

getFirstName.addEventListener("change", () => {
  const value = getFirstName.value.trim();
  const regex = /^[A-Za-z]+$/;

  if (!regex.test(value)) {
    alert("Debes ingresar solamente texto, no números ni símbolos");
    getFirstName.value=''
  }
});

getLastName.addEventListener("change", () => {
  const value = getFirstName.value.trim();
  const regex = /^[A-Za-z]+$/;

  if (!regex.test(value)) {
    alert("Debes ingresar solamente texto, no números ni símbolos");
    getLastName.value=''
  }
});

getUsername.addEventListener("change", () => {
  const value = getUsername.value.trim();
  const regex = /^[A-Za-z]\w{5,29}$/;

  if (!regex.test(value)) {
    alert("No puedes tener espacios ni símbolos en tu nombre de usuario");
    getUsername.value=''
  }
});



submitButton.addEventListener("click", () => alert("submit"));
