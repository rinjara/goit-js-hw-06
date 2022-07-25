// Лічильник складається зі спану і кнопок, які по кліку
// повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких
// збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const valueRef = document.querySelector('#value');
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);
