import {
  FAVORITES,
} from 'Actions/types';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  const options = {
    [FAVORITES]: [...state, action.music],
  };

  return options[action.type] || state;
};

export default reducer;
