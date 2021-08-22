import { SEARCH } from 'Actions/types';

const INITIAL_STATE = { query: '', isUserSearching: false };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH:
      return { query: action.query, isUserSearching: action.isUserSearching };

    default:
      return state;
  }
};

export default reducer;
