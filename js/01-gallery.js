import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryRef = document.querySelector(".gallery");

const openModal = (event) => {
  event.preventDefault();

  const image = event.target.dataset.source;
  if (image) {
    const instance = basicLightbox.create(`
      <div class="modal">
          <img class="gallery__image" src="${image}" alt="Some text"/>
      </div>
    `);

    instance.show();
  }
}

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

galeryRef.insertAdjacentHTML('afterbegin', createImg);
galeryRef.addEventListener('click', openModal);
console.log(galleryItems);