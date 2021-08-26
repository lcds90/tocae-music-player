import { combineReducers } from 'redux';

import search from './search';
import tracks from './tracks';
import user from './user';

const rootReducer = combineReducers({
  tracks,
  search,
  user,
});

export default rootReducer;
