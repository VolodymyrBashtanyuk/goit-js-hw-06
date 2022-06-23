const onCategories = document.querySelector('#categories');

const isQuantityOfCategories = onCategories.childElementCount;
console.log(`Number of categories: ${isQuantityOfCategories}`);

function onItemNameAndQuantityCategories (category) {
    const categoryItemName = category.firstElementChild.textContent;
    const categoryItemLength = category.lastElementChild.childElementCount;

    console.log(`Category: ${categoryItemName}`);
    console.log(`Elements: ${categoryItemLength}`);


}

onItemNameAndQuantityCategories (onCategories.firstElementChild);
onItemNameAndQuantityCategories (onCategories.children[1]);
onItemNameAndQuantityCategories (onCategories.lastElementChild);
