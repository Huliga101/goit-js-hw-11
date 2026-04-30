import axios from 'axios';

const API_KEY = '55655169-5dca28bc7cc616be385f48ac4';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
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