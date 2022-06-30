const getCategories = document.querySelector('#categories');
const getElementsItem = document.querySelectorAll('.item');

const isQuantityOfCategories = getCategories.childElementCount;
console.log(`Number of categories: ${isQuantityOfCategories}`);


getElementsItem.forEach(element => {
    const categoryItemName = element.firstElementChild.textContent;
    const categoryItemLength = element.lastElementChild.childElementCount;

    console.log(`Category: ${categoryItemName}`);
    console.log(`Elements: ${categoryItemLength}`);
    
});

