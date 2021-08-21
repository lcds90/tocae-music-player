import { SEARCH } from 'Actions/types';

const INITIAL_STATE = { query: '', isUserSearching: false };

const reducer = (state = INITIAL_STATE, action) => {
  const options = {
    [SEARCH]: { query: action.query, isUserSearching: action.isUserSearching },
  };

  return options[action.type] || state;
};

export default reducer;
