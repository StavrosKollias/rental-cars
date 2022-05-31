import 'core-js/stable'
import React from 'react'
import ReactDom from 'react-dom'
import { App } from './components/App'
import { SearchProvider } from './contexts/SearchContext/SearchContext'
import './assets/styles/index.scss'

// After
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>,
)
