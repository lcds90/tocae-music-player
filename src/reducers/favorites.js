import {
  ADD_MUSIC_TO_FAVORITES,
} from '@/global';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  const options = {
    [ADD_MUSIC_TO_FAVORITES]: [...state, action.music],
  };

  return options[action.type] || state;
};

export default reducer;
