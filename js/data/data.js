import { createObject } from '../utils/utils.js';

export const generateObjects = () => {
  const objArray = [];
  for (let i = 1; i <= 25; i++) {
    objArray.push(createObject(i, `Object №${i}`));
  }
  return objArray;
};
