// Напиши скрипт, який під час втрати фокусу на інпуті
// (подія blur), перевіряє його вміст щодо правильної
// кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border
// інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і
// invalid, які ми вже додали у вихідні файли завдання.

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
  //   console.log(inputRef.value.length);
  //   console.log(inputRef.dataset.length);
  if (inputRef.value.length === parseInt(inputRef.dataset.length)) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
});
