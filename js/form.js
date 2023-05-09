/* eslint-disable no-use-before-define */
import { setupListeners, removeListeners } from './effects.js';
import { resizeImage } from './scale.js';

const imageForm = document.querySelector('.img-upload__form');
const imageOverlay = imageForm.querySelector('.img-upload__overlay');
const closeButton = imageForm.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');
const img = document.querySelector('.img-upload__preview > img');

const cleanImageModifiers = () => {
  resizeImage(100);
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
};

const cleanForm = () => {
  document.querySelector('#upload-select-image').reset();
  document.querySelector('#upload-file').value = '';
};

const openWindow = (e) => {
  img.src = window.URL.createObjectURL(e.target.files[0]);
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnEsc);
  setupListeners();
};

export const closeWindow = (clean = false) => {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnEsc);
  img.classList.remove(...img.classList);
  img.classList.add('effects__preview--none');
  removeListeners();
  cleanForm();
  if (clean) {
    cleanImageModifiers();
  }
};

const closeOnEsc = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeWindow();
  }
};

closeButton.onclick = (evt) => {
  evt.preventDefault();
  closeWindow(true);
};

uploadFile.addEventListener('change', openWindow);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWindow();
  }
});

const cancelButton = document.querySelector('#upload-cancel');

cancelButton.addEventListener('click', () => closeWindow());
