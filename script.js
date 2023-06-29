const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirm-password");
const inputBirthday = document.getElementById("birthday");
const inputNewsletter = document.getElementById("check-newsletter");
const buttonSubmit = document.getElementById("submit");

const regexName = new RegExp(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/);
const regexUsername = new RegExp(/^[A-Za-z]\w{5,29}$/);

try {
  inputFirstName.addEventListener("change", () => {
    const value = inputFirstName.value.trim();
    const regex = regexName;

    if (!regex.test(value)) {
      alert("Debes ingresar solamente texto, no números ni símbolos");
      inputFirstName.value = "";
    }
  });

  inputLastName.addEventListener("change", () => {
    const value = inputLastName.value.trim();
    const regex = regexName;

    if (!regex.test(value)) {
      alert("Debes ingresar solamente texto, no números ni símbolos");
      inputLastName.value = "";
    }
  });

  inputUsername.addEventListener("change", () => {
    const value = inputUsername.value.trim();
    const regex = regexUsername;

    if (!regex.test(value)) {
      alert(
        "Sólo puedes agregar letras, números y _ , sin espacios ni otros símbolos"
      );
      inputUsername.value = "";
    }
  });

  const testPasswords = () => {
    const firstPassword = inputPassword.value;
    const secondPassword = inputConfirmPassword.value;

    if (firstPassword !== secondPassword) {
      alert("Las contraseñas no coinciden");
      inputConfirmPassword.value = "";
    }
  };
  inputConfirmPassword.addEventListener("change", testPasswords);

  inputNewsletter.addEventListener("change", () => {
    if (inputNewsletter.checked) {
      alert("Recibirás todas nuestras novedades");
    } else {
      alert("No recibirás nuestras novedades");
    }
  });

  const submitData = () => {
    if (
      !inputFirstName.value ||
      !inputLastName.value ||
      !inputUsername.value ||
      !inputPassword.value ||
      !inputConfirmPassword.value ||
      !inputBirthday.value
    ) {
      alert(" Debes completar todos los campos");
    } else {
      alert("Tus datos están correctos");
      window.location.reload();
    }
  };
  buttonSubmit.addEventListener("click", submitData);
} catch (error) {
  console.error(error);
}
