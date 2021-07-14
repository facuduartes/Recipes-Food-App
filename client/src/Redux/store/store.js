import {createStore, applyMiddleware, compose} from 'redux';
// import rootReducer from '../reducers/';
import thunk from 'redux-thunk';                  //MANEJA ASYNC 
import rootReducer from '../reducers/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
