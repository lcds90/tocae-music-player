import axios from 'axios';

const URL = 'http://localhost:8080/https://api.deezer.com';

export const getTopChart = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${URL}/chart`,
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

export const getFavorites = () => 'ok';
