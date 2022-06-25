let counterValue = 0;

function increment(add) {
    counterValue = add += 1;
};
function decrement(remove) {
    counterValue = remove -= 1;
};


const onCounterValue = document.querySelector('#value');
const onDecrementButton = document.querySelector('[data-action="decrement"]');
const onIncrementButton = document.querySelector('[data-action="increment"]');


onDecrementButton.addEventListener('click', function () {
    decrement(counterValue);
    onCounterValue.textContent = counterValue;
});
onIncrementButton.addEventListener('click', function () {
   increment(counterValue);
    onCounterValue.textContent = counterValue;
});





