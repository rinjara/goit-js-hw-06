// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в
// ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories,
// знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в
// категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні
// повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesRef = document.querySelector('#categories');
const itemsRef = document.querySelectorAll('.item');

// console.log(categoriesRef);
// console.log(categoriesRef.children);

const categoriesLength = categoriesRef.children.length;
const resultPhrase = `Number of categories: ${categoriesLength}`;
console.log(resultPhrase);

// console.log(itemsRef);

itemsRef.forEach(el => {
  // console.log(el);
  const titleRef = el.firstElementChild.textContent;
  // console.log(titleRef);
  const elemCountRef = el.lastElementChild.children.length;
  // console.log(elemCountRef);
  const result = `Category: ${titleRef}\nElements: ${elemCountRef}`;
  console.log(result);
});
