import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp'
// import { ReduxToolkit } from './ReduxToolkit'
import { store } from './store'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store}>
      <PokemonApp />
      {/* <ReduxToolkit incrementValue={2} /> */}
    </Provider>
  </React.StrictMode>
)
