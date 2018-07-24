const initialState = {
  searchTerm: '',
};

const setSearchTerm = (state, action) =>
  Object.assign({}, state, { searchTerm: action.payload });

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return setSearchTerm(state, action);
    case 'RECEIVE_RESULTS':
      return state;
    default:
      return state;
  }
};


export default appReducer;
