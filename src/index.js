import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import { App } from './components';

// import { Provider } from 'react-redux';
// import localStorage from 'localStorage';
// import configureStore from './store/configureStore';
// import getRoutes from './routes';

// var auth = JSON.parse(localStorage.getItem('userAuth'));
// var initialState = {
//   auth: auth,
//   messages: {}
// };

// const store = configureStore(initialState);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root')
);

registerServiceWorker();
