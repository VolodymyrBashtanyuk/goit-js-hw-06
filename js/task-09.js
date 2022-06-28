

const getButtonChangeColor = document.querySelector('.change-color');
const getColor = document.querySelector('.color');
const getBackgroundColor = document.querySelector('body');

getButtonChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  getBackgroundColor.style.backgroundColor = getRandomHexColor();
  getColor.textContent = getRandomHexColor(); 
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
