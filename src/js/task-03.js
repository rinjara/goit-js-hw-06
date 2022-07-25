// Напиши скрипт для створення галереї зображень на
// підставі масиву даних.HTML містить список ul.gallery.

// <ul class="gallery"></ul>
// Використовуй масив об'єктів images для створення
// елементів < img >, вкладених в < li >.Для створення
// розмітки використовуй шаблонні рядки і метод
// insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну
// операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або
// грідами через CSS класи.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');
const headForStyleRef = document.querySelector('head');

const list = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery__item"><img src="${url}" alt="${alt}" class="gallery__img"></li>`
  )
  .join('');
// console.log(list);
galleryRef.insertAdjacentHTML('beforeend', list);

const style = `<style>
.gallery {
display: flex;
flex-wrap: wrap;
gap: 10px;

padding: 0;
margin: 0;
list-style: none;
} 

.gallery__item {
 flex-basis: calc((100% - 20px) / 3);
} 

.gallery__img {
display: block;
max-width: 100%;
height: 100%;

object-fit:cover;
}
</style>`;

headForStyleRef.insertAdjacentHTML('beforeend', style);
