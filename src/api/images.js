import axios from 'axios';

const accessKey = '0XfratyWFwazd3jtriqayK492B62RxDitahoXV8T95Y';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common = {
  Authorization: `Client-ID ${accessKey}`,
  'Accept-Version': 'v1',
};
const perPage = 12;
async function getImages(query, page) {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });
  const { results: images, total_pages: totalPages } = response.data;
  return { images, totalPages };
}

export default getImages;
