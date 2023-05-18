const pictureHW = 182;

const createPictureFromObject = (object) => {
  const pictureParent = document.createElement('a');
  const pictureImage = document.createElement('img');
  const pictureInfo = document.createElement('p');
  const pictureComments = document.createElement('span');
  const pictureLikes = document.createElement('span');

  pictureParent.setAttribute('href', '#');
  pictureParent.classList.add('picture');

  pictureImage.setAttribute('width', pictureHW.toString());
  pictureImage.setAttribute('height', pictureHW.toString());
  pictureImage.setAttribute('src', object.url);
  pictureImage.setAttribute('alt', object.description);
  pictureImage.classList.add('picture__img');

  pictureComments.append(object.comments);
  pictureComments.classList.add('picture__comments');

  pictureLikes.append(object.likes);
  pictureLikes.classList.add('picture__likes');

  pictureInfo.classList.add('picture__info');
  pictureInfo.append(pictureComments, pictureLikes);

  pictureParent.append(pictureImage, pictureInfo);

  return pictureParent;
};

export const showPicturesFromObjects = (objects) => {
  const pictures = new DocumentFragment();
  pictures.append(...objects.map((object) => createPictureFromObject(object)));
  document.querySelector('.pictures').appendChild(pictures);
};
