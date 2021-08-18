import { combineReducers } from 'redux';

import {
  ADD_MUSIC_TO_FAVORITES,
  DATA,
} from '@/global';

import favorites from './favorites';
import data from './data';

const rootReducer = combineReducers({
  [DATA]: data,
  [ADD_MUSIC_TO_FAVORITES]: favorites,
});

export default rootReducer;
