const categoriesListRef = document.querySelector('#categories');
const categoryItems = categoriesListRef.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
