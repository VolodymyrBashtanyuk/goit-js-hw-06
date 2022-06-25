const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('focus', () => validationInput.classList.remove('invalid'));
validationInput.addEventListener('blur', onValidation);

function onValidation(event) {
    if (event.currentTarget.value.length === Number(validationInput.dataset.length)) {
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.add('invalid');
    };
    
};
