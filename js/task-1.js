const categoriesList = document.getElementById('categories')

const items = categoriesList.querySelectorAll('li.item')

const count = items.length;

console.log(`Number of categories: ${count}`);

const itemsArray = Array.from(items);

itemsArray.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    console.log(`Category: ${categoryTitle}`);

    const subItems = item.querySelectorAll('ul > li');
    const numberOfEl = subItems.length;
    console.log(`Elements: ${numberOfEl}`);
}
)
