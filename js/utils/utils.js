export const randomIntInRange = (left, right) => {
  left = Math.ceil(left);
  right = Math.floor(right);
  return Math.floor(Math.random() * (right - left) + left);
};

export const checkStrLength = (str, maxLength) => str.length <= maxLength;

export const createObject = (i, desc) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: desc,
  likes: randomIntInRange(15, 200),
  comments: randomIntInRange(0, 200)
});
