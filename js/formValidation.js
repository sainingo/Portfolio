const formElement = document.getElementById('form');
const email = document.getElementById('email');
const small = document.querySelector('small');

const isLowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailElement = email.value;
  if (!isLowerCase(emailElement)) {
    small.innerHTML = 'Email must be lowercase';
  } else {
    formElement.submit();
  }
});
