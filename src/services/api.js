import axios from 'axios';

import {
  URL,
} from '@/global';

export const getTopChart = async () => {
  const { data } = await axios({
    method: 'get',
    url: URL,
  });
  return data;
};

export const getFavorites = () => 'ok';
