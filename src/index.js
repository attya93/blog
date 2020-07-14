import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk';


import { reduxFirestore, getFirestore, firestoreReducer, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase, firebaseReducer, isLoaded } from 'react-redux-firebase';

import firebase from 'firebase/app';

import fbConfig from './config/fbConfig';

import './index.css';
import AuthReducer from './store/AuthReducer';
import PostReducer from './store/PostReducer';


import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer,
  firestore: firestoreReducer,// get data from db,
  fBase: firebaseReducer// synce fb auth status
});

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  , reduxFirestore(fbConfig)
)
);
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // this to enable realtime sync and allow create collections
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

// this function is preventDefault of loading show sign in/out in reload
function AuthIsLoaded({ children }) { //high order component
  const auth = useSelector(state => state.fBase.auth); //get user form state fBase.auth
  if (!isLoaded(auth)) return <div>Loading ....</div>;
  return children;
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <React.StrictMode>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
        </React.StrictMode>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
