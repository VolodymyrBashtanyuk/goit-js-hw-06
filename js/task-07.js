const inputControl = document.querySelector('#font-size-control');
const textSizeControl = document.querySelector('#text');

inputControl.setAttribute('step', '2');
textSizeControl.style.fontSize = inputControl.value + 'px';
   
inputControl.addEventListener('input', function () {
    textSizeControl.style.fontSize = inputControl.value + 'px';
});
