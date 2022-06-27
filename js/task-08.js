const getForm = document.querySelector('.login-form');

const getInput = document.querySelectorAll('input')
getInput[0].removeAttribute('type');


getForm.addEventListener('submit', onFormSubmit)
function onFormSubmit(event) {
    event.preventDefault();
    
    if (getInput[0].value=== ' ' || !getInput[0].value.includes('@') ) {
        alert('Enter valid Email')
    } else if (getInput[1].value === '') {
        alert('Enter password')
    } else {
        const formData = new FormData(event.currentTarget);
    
        formData.forEach((name, value) => {
        console.log('name:',value);
        console.log('value:', name);
        
        getForm.reset();
        
    });
    };   


    
    

};

