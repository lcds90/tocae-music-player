import { RESULTS, TOP_CHART } from 'Actions/types';

const INITIAL_STATE = {
  topChart: [],
  resultsFromSearch: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOP_CHART:
      return { ...state, topChart: action.topChart };
    case RESULTS:
      return { ...state, resultsFromSearch: action.resultsFromSearch };
    default:
      return state;
  }
};

export default reducer;
