import { combineReducers } from 'redux';

import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FAVORITES,
  TOP_CHART,
  SEARCH,
  RESULTS,
} from 'Actions/types';

import search from './search';
import tracks from './tracks';
import user from './user';

const rootReducer = combineReducers({
  [TOP_CHART]: tracks,
  [RESULTS]: tracks,
  [SEARCH]: search,
  [ADD_FAVORITE]: user,
  [REMOVE_FAVORITE]: user,
  [FAVORITES]: user,
});

export default rootReducer;
