import { combineReducers } from 'redux';

import {
  FAVORITES,
  TOP_CHART,
  SEARCH,
  RESULTS,
} from 'Actions/types';

import search from './tracksSearch';
import tracks from './tracks';
import user from './user';

const rootReducer = combineReducers({
  [TOP_CHART]: tracks,
  [RESULTS]: tracks,
  [SEARCH]: search,
  [FAVORITES]: user,
});

export default rootReducer;
