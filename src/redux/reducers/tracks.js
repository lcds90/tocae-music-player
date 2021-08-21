import { RESULTS, TOP_CHART } from 'Actions/types';

const INITIAL_STATE = {
  topChart: [],
  resultsFromSearch: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  const options = {
    [TOP_CHART]: { ...state, topChart: action.topChart },
    [RESULTS]: { ...state, resultsFromSearch: action.resultsFromSearch },
  };

  return options[action.type] || state;
};

export default reducer;
