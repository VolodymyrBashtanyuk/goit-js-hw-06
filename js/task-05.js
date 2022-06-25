const nameInput = document.querySelector('#name-input');
const titleUserName = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputChange);


function onInputChange(event) {
    titleUserName.textContent = event.currentTarget.value;
};