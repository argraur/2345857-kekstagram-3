import { showErrorFetch } from './fetch_error.js';
import { closeWindow } from '../form/form.js';
import { showErrorMessage, showSuccessMessage } from '../form/message.js';
import { showPicturesFromObjects } from '../utils/pictures.js';


export const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => showPicturesFromObjects(response))
    .catch(() => showErrorFetch());
};

export const sendData = (evt) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response) {
        showSuccessMessage();
        closeWindow(true);
      } else {
        showErrorMessage();
        closeWindow(false);
      }
    })
    .catch(() => {
      showErrorMessage();
    });
};
