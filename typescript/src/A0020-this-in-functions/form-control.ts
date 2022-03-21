import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEvent = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSenfForm(target)) {
    console.log('Formulário enviado');
  }
};

form?.addEventListener('submit', submitEvent);

function checkForEmptyFields(...fields: HTMLInputElement[]): void {
  fields.forEach((field) => {
    if (!field.value) showErrorMessage(field, 'Campo não pode ficar vazio');
  });
}

function checkEmail(email: HTMLInputElement): void {
  if (!isEmail(email.value)) showErrorMessage(email, 'Email inválido');
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value != password2.value) {
    showErrorMessage(password, 'Senhas devem ser iguais');
    showErrorMessage(password2, 'Senhas devem ser iguais');
  }
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerHTML = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((div) => div.classList.remove(SHOW_ERROR_MESSAGES));
}

function shouldSenfForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((div) => (send = false));
  return send;
}
