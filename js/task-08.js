const getForm = document.querySelector('.login-form');

const getInput = document.querySelectorAll('input')

getInput[0].removeAttribute('type');


getForm.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
  } = event.currentTarget;
    
    if (email.value=== ' ' || !email.value.includes('@') ) {
        alert('Enter valid Email')
    } else if (password.value === '') {
        alert('Enter password')
    } else {
        console.log(`Email: ${email.value}, Password: ${password.value}`)
        
        getForm.reset();
        
    };
    };   


