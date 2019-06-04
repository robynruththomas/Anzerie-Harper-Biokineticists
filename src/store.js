import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

let middleWare, store;

middleWare = applyMiddleware(thunk);
store= createStore(reducers, middleWare);

export default store;
