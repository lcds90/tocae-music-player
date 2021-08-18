import {
  ADD_MUSIC_TO_FAVORITES,
  DATA,
} from '@/global';

export const addFavorite = (music) => ({ type: ADD_MUSIC_TO_FAVORITES, music });
export const sendData = (musics) => ({ type: DATA, musics });
