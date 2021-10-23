import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");
const createImg = galleryItems.map(image =>
  `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`
).join("");

list.insertAdjacentHTML('afterbegin', createImg);
console.log(galleryItems);
