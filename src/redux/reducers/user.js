import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FAVORITES,
} from 'Actions/types';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.music];
    case REMOVE_FAVORITE:
      return [...state].filter((music) => music.id !== action.music.id);
    default:
      return state;
  }
};

export default reducer;
