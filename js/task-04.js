const onCounterValue = document.querySelector('#value');
const onDecrementButton = document.querySelector('[data-action="decrement"]');
const onIncrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

onDecrementButton.addEventListener('click', function () {
    decrement();
    onCounterValue.textContent = counterValue;
});
onIncrementButton.addEventListener('click', function () {
   increment();
    onCounterValue.textContent = counterValue;
});

function decrement() {
    counterValue -= 1;
};
function increment() {
    counterValue += 1;
};



