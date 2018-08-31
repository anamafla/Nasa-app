import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA, TOGGLE_RESULTS_LOADING, RESULTS_MESSAGE } from './actionTypes';
import store from '../store';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function toggleResultsLoading() {
  return { type: TOGGLE_RESULTS_LOADING };
}

export function resultMessage(message) {
  return { type: RESULTS_MESSAGE, payload: message };
}

export function getData() {
  const term = store.getState().searchTerm;
  return (dispatch) => {
    dispatch(toggleResultsLoading());
    axios.get(`https://images-api.nasa.gov/search?q=${term}`)
  .then(response => {
    console.log('response.data.collection.items', response.data.collection.items);
    const dataResponse = response.data.collection.items.filter(item => item.data[0].media_type === 'image').slice(0, 40);
    if (dataResponse.length === 0) {
      dispatch(resultMessage(`No found results for your search ${term}`));
    }
    dispatch(addAPIData(dataResponse));
    dispatch(toggleResultsLoading());
  })
  .catch(error => {
    dispatch(toggleResultsLoading());
    dispatch(resultMessage('A network error has ocurred, please check your network connection'));
    console.log(error, 'failed to fetch data');
  });
  };
}
