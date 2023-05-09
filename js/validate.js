import { checkStrLength } from './utils.js';
import { sendData } from './api.js';

const imageForm = document.querySelector('.img-upload__form');
const regex = new RegExp('^#[а-яА-ЯA-Za-zёЁ0-9]{1,17}$');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const validateHashtag = (element) => regex.test(element) || checkStrLength(element, 0);
const validateComment = (element) => !checkStrLength(element, 19) && checkStrLength(element, 140);

pristine.addValidator(document.querySelector('.text__description'), validateComment, 'Длина комментария не может быть меньше 20 и больше 140 символов.');
pristine.addValidator(document.querySelector('.text__hashtags'), validateHashtag, 'Хэштег обязан начинаться с # и не должен превышать 17 символов.');

imageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    sendData(evt);
  }
});
