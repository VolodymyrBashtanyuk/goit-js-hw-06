const getForm = document.querySelector('.login-form');

const getInput = document.querySelectorAll('input')

// getInput[0].removeAttribute('type'); якщо не прибрати 'type' то коли користувач не поставив '@' браузер показуе невірність напису, а я зробив через 'alert'. 

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


