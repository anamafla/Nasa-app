import { SET_SEARCH_TERM, ADD_API_DATA, TOGGLE_RESULTS_LOADING, RESULTS_MESSAGE } from '../actions/actionTypes';

const initialState = {
  searchTerm: '',
  results: [],
  resultsLoading: false,
  resultsMessage: '',
};

const setSearchTerm = (state, action) =>
  Object.assign({}, state, { searchTerm: action.payload });

const setResults = (state, action) =>
  Object.assign({}, state, { results: action.payload });

const setResultsLoading = (state) =>
  Object.assign({}, state, { resultsLoading: !state.resultsLoading });

const setResultsMessage = (state, action) =>
Object.assign({}, state, { resultsMessage: action.payload });

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    case ADD_API_DATA:
      return setResults(state, action);
    case TOGGLE_RESULTS_LOADING:
      return setResultsLoading(state);
    case RESULTS_MESSAGE:
      return setResultsMessage(state, action);
    default:
      return state;
  }
};


export default appReducer;
