const decreaseBtn = document.querySelector('.scale__control--smaller');
const increaseBtn= document.querySelector('.scale__control--bigger');
const scale = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');

export const resizeImage = (newScale) => {
  scale.value = `${newScale}%`;
  image.style.transform = `scale(${newScale/100})`;
};

decreaseBtn.addEventListener('click', () => {
  const currentScale = Number(scale.value.replace('%', ''));
  if (currentScale > 25) {
    resizeImage(currentScale - 25);
  }
});

increaseBtn.addEventListener('click', () => {
  const currentScale = Number(scale.value.replace('%', ''));
  if (currentScale < 100) {
    resizeImage(currentScale + 25);
  }
});
