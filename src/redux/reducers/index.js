import { combineReducers } from 'redux';
import search from './search';
import tracks from './tracks';
import user from './user';

const rootReducer = combineReducers({
  tracks, // Top Chart
  search, // Query, resultado e pesquisa
  user, // Favoritos
});

export default rootReducer;
