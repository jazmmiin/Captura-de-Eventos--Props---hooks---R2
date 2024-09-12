const form = document.querySelector('form');
const inputFields = form.querySelectorAll('input');
const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (e) => {
  e.preventDefault(); 
  let isValid = true;

  inputFields.forEach((input) => {
    if (input.type === 'text' && input.value.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres para que sea valido.');
      isValid = false;
    } else if (input.type === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(input.value)) {
        alert('E-mail invalido. Vuelve a comprobarlo.');
        isValid = false;
      }
    } else if (input.type === 'password' && input.value.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      isValid = false;
    }
  });

  if (isValid) {
    form.submit();
  }
});