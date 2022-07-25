// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і
// натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів
// очищається.
// Створи функцію createBoxes(amount), яка приймає один
// параметр - число.Функція створює стільки < div >,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим
// від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у
// форматі HEX.Використовуй готову функцію getRandomHexColor
// для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст
// div#boxes, у такий спосіб видаляючи всі створені елементи.

const boxesWraperRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('#controls');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let amount = '';

const getAmountFromInput = event => {
  amount = event.target.value;
  console.log(amount);
};

const createBoxes = amount => {};

const destroyBoxes = () => {
  boxesWraperRef.innerHTML = '';
};

inputRef.addEventListener('input', getAmountFromInput);
createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

// const list = images
//   .map(
//     ({ url, alt }) =>
//       `<li class="gallery__item"><img src="${url}" alt="${alt}" class="gallery__img"></li>`
//   )
//   .join('');
// // console.log(list);
// galleryRef.insertAdjacentHTML('beforeend', list);
