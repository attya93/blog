import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';


import './index.css';
import AuthReducer from './store/AuthReducer';
import PostReducer from './store/PostReducer';


import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  auth: AuthReducer,
  post: PostReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));


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
