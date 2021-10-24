import { galleryItems } from './gallery-items.js';
// Change code below this line
const galeryRef = document.querySelector(".gallery");
const openModal = (event) => {
  event.preventDefault();

  const instance = basicLightbox.create(`
   
    <div class="gallery">
        <img class="gallery__image" src="${event.target.dataset.source}" alt="Some text"
        />
        </a>
    </div>
  `);

  instance.show();
}

const createImg = galleryItems.map(image =>
  `<div class="gallery__item">
       <a class="gallery__item" href="${image.original}">
            <img class="gallery__image"
            src="${image.preview}"
            alt="${image.description}"
         />
    </a>
  </div>`
).join("");

galeryRef.insertAdjacentHTML('afterbegin', createImg);
galeryRef.addEventListener('click', openModal);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom'});
console.log(galleryItems);




