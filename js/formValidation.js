const formElement = document.getElementById('form');
const email = document.getElementById('email');
const small = document.querySelector('small');

const regexCode = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
function isEmailValid(email) {
  return regexCode.test(email);
}

function checkInputs() {
  const emailValue = email.value.trim();
  if (emailValue !== '' && emailValue === emailValue.toLowerCase()) {
    isEmailValid(emailValue);
  } else {
    small.innerHTML = 'Email Must be all lowercase.';
  }
}

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});
