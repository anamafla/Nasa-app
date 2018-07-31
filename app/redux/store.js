import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(thunk),
   typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
   ),
  );

export default store;
