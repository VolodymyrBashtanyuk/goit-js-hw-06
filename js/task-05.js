const nameInput = document.querySelector('#name-input');
const titleUserName = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputChange);
console.log(titleUserName.textContent)

function onInputChange(event) { 
   if (event.currentTarget.value === '') {
        titleUserName.textContent = 'Anonymous';
   } else {
       titleUserName.textContent = event.currentTarget.value;
    };
       
};