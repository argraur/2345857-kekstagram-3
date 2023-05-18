export const updateSlider = (filter, imagePreview, slider, sliderParent) => {
  if (filter !== 'none') {
    sliderParent.style.display = ''; // Display slider
  }
  switch (filter) {
    case 'sepia':
    case 'chrome': {
      slider.noUiSlider.updateOptions({
        start: 0.5,
        step: 0.1,
        range: {
          'min': 0,
          'max': 1
        },
      });
      break;
    }
    case 'marvin': {
      slider.noUiSlider.updateOptions({
        start: 30,
        step: 1,
        range: {
          'min': 0,
          'max': 100
        },
      });
      break;
    }
    case 'phobos': {
      slider.noUiSlider.updateOptions({
        start: 1.5,
        step: 0.1,
        range: {
          'min': 0,
          'max': 3
        },
      });
      break;
    }
    case 'heat': {
      slider.noUiSlider.updateOptions({
        start: 2,
        step: 0.1,
        range: {
          'min': 1,
          'max': 3
        },
      });
      break;
    }
    case 'none': {
      imagePreview.style.filter = '';
      slider.noUiSlider.updateOptions({
        start: 0.5,
        step: 0.1,
        range: {
          'min': 0,
          'max': 1
        },
      });
      sliderParent.style.display = 'none'; // Hide slider
      break;
    }
  }
};
