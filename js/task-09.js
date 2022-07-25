// Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй
// функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  colorName: document.querySelector('.color'),
  changeColorButton: document.querySelector('.change-color'),
  page: document.querySelector('body'),
};

ref.changeColorButton.addEventListener('click', () => {
  const color = getRandomHexColor();
  ref.page.style.backgroundColor = color;
  ref.colorName.textContent = color;
});
