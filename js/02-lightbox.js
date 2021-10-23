import { galleryItems } from './gallery-items.js';
// Change code below this line

var lightbox = new SimpleLightbox('.gallery');
    lightbox.on('show.simplelightbox', function () {
	// do something…
});

const openModal = (event) => {
  event.preventDefault();

  const instance = basicLightbox.create(`
    <div class="modal">
        <img class="gallery__image" src="${event.target.dataset.source}" alt="Some text"/>
    </div>
  `);

  instance.show();
}

const createImg = galleryItems.map(image =>
  `<div class="gallery__item">
    <a class="gallery__item" href="${image.original}">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
    </a>
  </div>`
).join("");


//lightbox.insertAdjacentHTML('afterbegin', createImg);
//lightbox.addEventListener('click', openModal);

console.log(galleryItems);
