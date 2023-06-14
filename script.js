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
  const regex = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;

  if (!regex.test(value)) {
    alert("Debes ingresar solamente texto, no números ni símbolos");
    getFirstName.value = "";
  }
});

getLastName.addEventListener("change", () => {
  const value = getLastName.value.trim();
  const regex = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;

  if (!regex.test(value)) {
    alert("Debes ingresar solamente texto, no números ni símbolos");
    getLastName.value = "";
  }
});

getUsername.addEventListener("change", () => {
  const value = getUsername.value.trim();
  const regex = /^[A-Za-z]\w{5,29}$/;

  if (!regex.test(value)) {
    alert(
      "Sólo puedes agregar letras, números y _ , sin espacios ni otros símbolos"
    );
    getUsername.value = "";
  }
});

const testPasswords = () => {
  const firstPassword = getPassword.value;
  const secondPassword = getConfirmPassword.value;

  if (firstPassword !== secondPassword) {
    alert("Las contraseñas no coinciden");
    getConfirmPassword.value = "";
  }
};
getConfirmPassword.addEventListener("change", testPasswords);

getNewsletter.addEventListener("change", () => {
  if (getNewsletter.checked) {
    alert("Recibirás todas nuestras novedades");
  } else {
    alert("No recibirás nuestras novedades");
  }
});

const submitData = () => {
  if (
    !getFirstName.value ||
    !getLastName.value ||
    !getUsername.value ||
    !getPassword.value ||
    !getConfirmPassword.value ||
    !getBirthday.value
  ) {
    alert(" Debes completar todos los campos");
  } else {
    alert("Tus datos están correctos");
    window.location.reload();
  }
};
submitButton.addEventListener("click", submitData);
