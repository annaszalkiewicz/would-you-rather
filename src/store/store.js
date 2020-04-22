import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

// CONFIGURE STORE WITH REDUX DEVTOOLS

/* If you would like to use app with Redux Dev Tools
   1) Install extension in your browser:
			For Chrome: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
			For Mozilla: https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/?src=search
	 2) Uncomment variable enancers
	 3) Add compose to import from 'redux'
	 3) Uncomment configureStore() that includes enhancers
	 4) Comment configureStore() without enhancers
*/

// const enhancers =
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const configureStore = () => {
// 	return createStore(rootReducer, compose(applyMiddleware(thunk), enhancers));
// };

// Configure store without Redux Dev Tools

const configureStore = () => {
	return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
