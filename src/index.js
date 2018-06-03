import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
// import localStorage from 'localStorage'

import registerServiceWorker from './registerServiceWorker'

import Root from './components/Root'

import configureStore from './store/configureStore'

const initialState = {
  messages: {}
};

const store = configureStore(initialState)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
