// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let refs = {
  gallery: document.querySelector('.gallery'),
};

refs.gallery.addEventListener('click', loadGallery);

refs.gallery.insertAdjacentHTML('beforeend', loadGallery());

function loadGallery() {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> 

`
    )
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  close: false,
  showCounter: false,
});
