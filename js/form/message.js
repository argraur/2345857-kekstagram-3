/* eslint-disable no-use-before-define */

const successButtonListener = (event) => {
  if (event.key === 'Escape') {
    hideSuccessMessage();
    document.removeEventListener('keydown', successButtonListener);
  }
};

const errorButtonListener  = (event) => {
  if (event.key === 'Escape') {
    hideErrorMessage();
    document.removeEventListener('keydown', errorButtonListener);
  }
};

const hideErrorMessage = () => {
  const errorMessage = document.querySelector('.errorMessage');
  document.querySelector('body').removeChild(errorMessage);
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

export const showErrorMessage = () => {
  const template = document.querySelector('#error');
  const clone = template.content.cloneNode(true);
  document.querySelector('body').append(clone);
  document
    .querySelector('.error__button')
    .addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', errorButtonListener);
};

const hideSuccessMessage = () => {
  const successMessage = document.querySelector('.success');
  document.querySelector('body').removeChild(successMessage);
  document.removeEventListener('keydown', successButtonListener);
};

export const showSuccessMessage = () => {
  const template = document.querySelector('#success');
  const clone = template.content.cloneNode(true);
  document.querySelector('body').append(clone);
  document
    .querySelector('.success__button')
    .addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', successButtonListener);
};
