const formElement = document.getElementById('form');
const email = document.getElementById('email');
const emailErrorMessage = 'Please enter email address in lowercase.';
const errorMessageContainer = document.querySelector('.error-message');

const validateEmail = () => {
  const lowercaseEmail = email.value.toLowerCase();
  if (lowercaseEmail !== email.value) {
    email.classList.add('email-error');
    email.focus();
    errorMessageContainer.textContent = emailErrorMessage;
    return false;
  }
  email.classList.remove('email-error');
  return true;
};

formElement.addEventListener('submit', (event) => {
  if (!validateEmail()) {
    event.preventDefault();
  }
});
