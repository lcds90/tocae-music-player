import { RESULTS, TOP_CHART } from 'Actions/types';
import { PLAYER } from 'redux/actions/types';

const INITIAL_STATE = {
  topChart: [],
  resultsFromSearch: [],
  musicPlaying: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOP_CHART:
      return { ...state, topChart: action.topChart };
    case RESULTS:
      return { ...state, resultsFromSearch: action.resultsFromSearch };
    case PLAYER:
      return { ...state, musicPlaying: action.musicPlaying };
    default:
      return state;
  }
};

export default reducer;
