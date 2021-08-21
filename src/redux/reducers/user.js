import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FAVORITES,
} from 'Actions/types';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  const options = {
    [ADD_FAVORITE]: [...state, action.music],
    [REMOVE_FAVORITE]: [...state].filter((music) => music.id !== action.music.id),
    [FAVORITES]: state,
  };

  return options[action.type] || state;
};

export default reducer;
