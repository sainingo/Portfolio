const formElement = document.getElementById('form');
const email = document.getElementById('email');
const emailErrorMessage = 'Please enter email address in lowercase.';
const errorMessageContainer = document.querySelector('.error-message');
const formElements = document.querySelectorAll('input, textarea');

// store data on localstorage
const userName = document.querySelector('#username');
const textContent = document.querySelector('.text_area');
const savetoLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const formData = getLocalStorage('formData');
if (formData !== null) {
  userName.value = formData.name;
  email.value = formData.email;
  textContent.value = formData.message;
}

formElements.forEach((item) => {
  item.addEventListener('input', () => {
    const dataObject = {
      name: userName.value,
      email: email.value,
      message: textContent.value,
    };
    savetoLocalStorage('formData', dataObject);
  });
});

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
