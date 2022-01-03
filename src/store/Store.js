import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/index';
import getArticles from '../actions/get.action';

//2) creation du store
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;

store.dispatch(getArticles());
