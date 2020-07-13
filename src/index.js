import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';


import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

import './index.css';
import AuthReducer from './store/AuthReducer';
import PostReducer from './store/PostReducer';


import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer
});

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  , reactReduxFirebase(fbConfig),
  reduxFirestore(fbConfig)

)
);



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
