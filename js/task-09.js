

const getButtonChangeColor = document.querySelector('.change-color');
const getColor = document.querySelector('.color');
const getBackgroundColor = document.querySelector('body');

getButtonChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  getBackgroundColor.style.backgroundColor = getRandomHexColor();
  getColor.textContent = rgbhex(getBackgroundColor.style.backgroundColor); //hex
  // getColor.textContent = getBackgroundColor.style.backgroundColor; // rgb
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function rgbhex(rgb) {
  let RGB = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  
  return (RGB && RGB.length === 4) ? "#" +
    ("0" + parseInt(RGB[1], 10).toString(16)).slice(-2) +
    ("0" + parseInt(RGB[2], 10).toString(16)).slice(-2) +
    ("0" + parseInt(RGB[3], 10).toString(16)).slice(-2) : '';
};
