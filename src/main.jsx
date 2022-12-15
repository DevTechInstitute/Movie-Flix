import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { darkTheme } from './theme/dark-theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ darkTheme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
