const slider = () => document.querySelector('.effect-level__slider');
const currentFilter = () => document.querySelector('input[name="effect"]:checked').value;
const imagePreviewElement = () => document.querySelector('.img-upload__preview > img');
const levelInput = () => document.querySelector('.effect-level__value');
const filtersContainer = () =>  document.querySelector('.effects__list');
const sliderParent = () => document.querySelector('.effect-level');

import {updateSlider} from './update_slider.js';
import {generateEffect} from './effects_generator.js';

const addEffect = (imagePreview, value) => {
  const filter = currentFilter();
  imagePreview.style.filter = generateEffect(filter, value);
};

const radioButtonClickListener = (e) => {
  const img = imagePreviewElement();
  img.classList.remove(...img.classList);
  img.classList.add(`effects__preview--${e.target.value}`);
  updateSlider(e.target.value, img, slider(), sliderParent());
};

export const addEffectsListeners = () => {
  const imagePreview = imagePreviewElement();
  imagePreview.style.filter = '';

  noUiSlider.create(slider(), {
    start: 0.5,
    step: 0.1,
    range: {
      'min': 0,
      'max': 1
    },
  });

  sliderParent().style.display = 'none'; // Hide slider by default

  slider().noUiSlider.on('update', () => {
    const value = slider().noUiSlider.get();
    addEffect(imagePreview, value);
    levelInput().value = value;
  });

  filtersContainer().addEventListener('change', radioButtonClickListener);
};

export const removeEffectsListeners = () => {
  levelInput().value = '';
  filtersContainer().removeEventListener('change', radioButtonClickListener);
  slider().noUiSlider.destroy();
};
