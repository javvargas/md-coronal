import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import App from './routes/App'
import './styles/styles.scss'

const initialState = {
  'user': {},
  'menu': {},
  'textos': { 'titulo': 'Identificación de trazo Coronal en Fracturas Intertrocantericas' },
  'paciente': null
}

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose
const store = createStore(reducer, initialState, composerEnhancer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
)