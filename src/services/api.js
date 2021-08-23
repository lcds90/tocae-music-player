import axios from 'axios';

const URL = 'https://lcds-cors.herokuapp.com/https://api.deezer.com';

export const getTopChart = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${URL}/chart`,
    proxyHeaders: false,
    credentials: false,
  });
  return data;
};

export const searchForMusic = async (query) => {
  const { data } = await axios({
    method: 'get',
    url: `${URL}/search?q=${encodeURI(query)}`,
  });
  return data;
};

export const getFavorites = () => {
  const data = JSON.parse(localStorage.getItem('favorited_musics'));
  return data || [];
};

export const saveInFavorites = (id) => {
  const data = JSON.parse(localStorage.getItem('favorited_musics')) || [];
  data.push(id);
  localStorage.setItem('favorited_musics', JSON.stringify(data));
};

export const removeFromFavorites = (music) => {
  const data = JSON.parse(localStorage.getItem('favorited_musics')) || [];
  const filteredItems = data.filter((item) => item.id !== music.id);
  localStorage.setItem('favorited_musics', JSON.stringify(filteredItems));
};
