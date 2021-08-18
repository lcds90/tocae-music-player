import { DATA } from '@/global';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  const options = {
    [DATA]: [...state, action.musics],
  };

  return options[action.type] || state;
};

export default reducer;
