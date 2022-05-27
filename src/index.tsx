import 'core-js/stable'
import React from 'react'
import ReactDom from 'react-dom'
import { App } from './components/App'
import { SearchProvider } from './contexts/SearchContext/SearchContext'
import './assets/styles/index.scss'

ReactDom.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
