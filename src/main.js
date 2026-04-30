import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '55655169-5dca28bc7cc616be385f48ac4';
const BASE_URL = 'https://pixabay.com/api/';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = form.elements.searchQuery.value.trim();

  if (!query) {
    showError('Please enter a search query');
    return;
  }

  gallery.innerHTML = '';
  showLoader();

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    gallery.innerHTML = createGalleryMarkup(images);
    lightbox.refresh();
  } catch {
    showError('Something went wrong. Please try again later.');
  } finally {
    hideLoader();
  }
});

async function fetchImages(query) {
  const { data } = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return data.hits;
}

function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="image-info">
          <p><b>Likes</b>${likes}</p>
          <p><b>Views</b>${views}</p>
          <p><b>Comments</b>${comments}</p>
          <p><b>Downloads</b>${downloads}</p>
        </div>
      </li>
    `
    )
    .join('');
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

function showError(message) {
  iziToast.error({
    message,
    position: 'topRight',
  });
}

console.log(images);