import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import AppLayout from './Layout/App'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root