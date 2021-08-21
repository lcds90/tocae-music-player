import {
  getTopChart,
} from 'Services/api';
import {
  FAVORITES,
  TOP_CHART,
  SEARCH,
  RESULTS,
} from './types';

export const addFavorite = (music) => ({ type: FAVORITES, music });
export const fetchTopChart = (topChart) => ({ type: TOP_CHART, topChart });
export const search = ({ query, isUserSearching }) => ({ type: SEARCH, query, isUserSearching });
export const sendResults = (resultsFromSearch) => ({ type: RESULTS, resultsFromSearch });

export const fetchData = () => async (dispatch) => {
  const { tracks } = await getTopChart();
  dispatch(fetchTopChart(tracks));
};
