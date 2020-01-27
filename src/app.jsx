import {hot} from 'react-hot-loader'
import {Provider} from 'react-redux'
import React from 'react'
import store from './reducers'

import ShiftsContainer from './features/shifts/ShiftsContainer.jsx'


function App() {
  return (
    <Provider store={store}>
      <ShiftsContainer />
    </Provider>
  )
}

export default hot(module)(App)
