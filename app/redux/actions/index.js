import { SET_SEARCH_TERM } from './actionTypes';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}
