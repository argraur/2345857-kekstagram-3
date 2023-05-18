export const generateEffect = (effect, value) => {
  switch (effect) {
    case 'chrome': return `grayscale(${value})`;
    case 'sepia': return`sepia(${value})`;
    case 'marvin': return `invert(${value}%)`;
    case 'phobos': return `blur(${value}px)`;
    case 'heat': return `brightness(${value})`;
    default: return '';
  }
};
