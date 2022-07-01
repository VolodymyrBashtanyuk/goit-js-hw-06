const getCreateButton = document.querySelector('[data-create]');
const getDestroyButton = document.querySelector('[data-destroy]');
const getColorBox = document.querySelector('#boxes');
const getControlAmount = document.querySelector('input');


getCreateButton.addEventListener('click', onCreateBoxes);
getDestroyButton.addEventListener('click', onDectroyButton);

// це зробленно через map  в неї я не виходить  добавити счьотчик!!! Щоб кольори продовжували зростати

// function onCreateBoxes() {
//   let numberArray = [];

//   for (let i = 1; i <= getControlAmount.value; i += 1) { 
//        numberArray.push(i);
// };
 
//   const boxes = numberArray.map((number) => {
     
//     console.log(number)
//     const createBox  = document.createElement('div');
//     const valueSize = (20 + number * 10);
//     createBox.style.width = `${valueSize}px`;
//     createBox.style.height = `${valueSize}px`;
//     createBox.style.backgroundColor = getRandomHexColor();
//     return createBox;
//   }); 
//   getColorBox.append(...boxes);
// };


let counter = 0;
function onCreateBoxes () {
  const numberArray  = [];
  for (let i = 0; i < getControlAmount.value; i += 1) { 
    counter += 1; 
      
   const createBox  = document.createElement('div');
    const valueSize = (20 + counter * 10);
    createBox.style.width = `${valueSize}px`;
    createBox.style.height = `${valueSize}px`;
    createBox.style.backgroundColor = getRandomHexColor();
    numberArray .push(createBox); 
  }
  getColorBox.append(...numberArray); 
};

function onDectroyButton() {
  counter = 0;
  getColorBox.innerHTML = '';
  getControlAmount.value = '';
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
