import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
// import userDataReducer from './store/reducers/userInfo';


axios.defaults.baseURL = 'https://react-task-moonraft-0.firebaseio.com/';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'



const rootReducer = combineReducers({
  // userInfo : userDataReducer,
  auth: authReducer  
});

// const logger = store => {
//   return next => {
//       return action => {
//           console.log('[Middleware] Dispatching', action);
//           const result = next(action);
//           console.log('[Middleware] next state', store.getState());
//           return result;
//       }
//   }
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
// registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
