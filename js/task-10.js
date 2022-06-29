const getCreateButton = document.querySelector('[data-create]');
const getDestroyButton = document.querySelector('[data-destroy]');
const getColorBox = document.querySelector('#boxes');
const getControlAmount = document.querySelector('input');

getCreateButton.addEventListener('click', createBoxes);

function createBoxes(amount){
  amount = Number(getControlAmount.value);
  
  for (let i = 1; i <= amount; i += 1) {
    const createBox = document.createElement("div");
    createBox.style.width = (20 + i * 10) + "px";
    createBox.style.height = (20 + i * 10) + "px";
    createBox.style.backgroundColor = getRandomHexColor();
    getColorBox.append(createBox);
  };
  };
   

getDestroyButton.addEventListener('click', () => getColorBox.innerHTML = '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
