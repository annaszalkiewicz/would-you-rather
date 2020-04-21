import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

// Configure store with Redux Dev Tools
const enhancers =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
	return createStore(rootReducer, compose(applyMiddleware(thunk), enhancers));
};

//Configure store without Redux Dev Tools

// const configureStore = () => {
// 	return createStore(rootReducer, applyMiddleware(thunk));
// };

export default configureStore;
