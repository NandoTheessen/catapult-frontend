import {render} from 'react-dom'
import React from 'react'
import App from './app.jsx'

const ROOT_ELEMENT_ID = 'react-tech-test'

render(<App />, document.getElementById(ROOT_ELEMENT_ID))
