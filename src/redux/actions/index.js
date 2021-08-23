import {
  getTopChart, getFavorites,
} from 'Services/api';
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOP_CHART,
  SEARCH,
  RESULTS,
  PLAYER,
} from './types';

export const handleFavorite = (music, operation) => (
  operation === 'add'
    ? { type: ADD_FAVORITE, music }
    : { type: REMOVE_FAVORITE, music }
);

export const fetchTopChart = (topChart) => (
  { type: TOP_CHART, topChart });

export const search = ({ query, isUserSearching }) => (
  { type: SEARCH, query, isUserSearching });

export const sendResults = (resultsFromSearch) => (
  { type: RESULTS, resultsFromSearch });

export const sendMusicToPlayer = (url) => (
  { type: PLAYER, musicPlaying: url }
);

export const fetchData = () => async (dispatch) => {
  const { tracks } = await getTopChart();
  const favorites = await getFavorites();

  dispatch(fetchTopChart(tracks));
  favorites.forEach((favorite) => {
    dispatch(handleFavorite(favorite, 'add'));
  });
};
