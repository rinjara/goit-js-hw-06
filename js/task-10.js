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

// let amount = 0;
let boxAmount = 0;

// const getAmountFromInput = event => {
//   amount = parseInt(event.target.value);
// };

const createBoxes = amount => {
  // console.log(amount);
  if (amount > 500) return alert("STOP! Don't do this. Please!\nUse value less then 500");
  let result = [];
  for (let i = 0; i < amount; i += 1) {
    // console.log(i);
    let div = document.createElement('div');

    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${boxAmount * 10 + 30}px`;
    div.style.height = `${boxAmount * 10 + 30}px`;

    result.push(div);

    boxAmount += 1;
  }
  // console.log(result);
  boxesWraperRef.append(...result);
};

const destroyBoxes = () => {
  boxesWraperRef.innerHTML = '';
  boxAmount = 0;
};

// inputRef.addEventListener('input', getAmountFromInput);
createBtnRef.addEventListener('click', () =>
  createBoxes(parseInt(inputRef.firstElementChild.value))
);
destroyBtnRef.addEventListener('click', destroyBoxes);
