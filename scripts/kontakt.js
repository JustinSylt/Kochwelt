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

function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch('https://formspree.io/f/xojpdeyk', {
    method: 'POST',
    body: new FormData(event.target),
    headers: {
      Accept: 'application/json',
    },
  })
    .then(() => {
      window.location.href = '../pages/send_mail.html';
    })
    .catch((error) => {
      console.log(error);
    });
}
