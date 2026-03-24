function checkForEmptyInput() {
  const inputs = document.querySelectorAll('input, textarea');
  const emailInput = document.querySelector('input[name="deine Email"]');
  let allValid = true;

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      allValid = false;
      alert('Bitte fülle alle Felder aus!');
    } else {
      input.classList.remove('error');
    }
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    allValid = false;
    alert('Bitte gebe eine gültige Email an.');
  }

  return allValid;
}
