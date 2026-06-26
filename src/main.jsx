import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/main.css'
import './styles/variant-a.css'
import './styles/variant-b.css'
import './styles/variant-c.css'

const saved = localStorage.getItem('airc-variant') || 'v0'
document.body.classList.add(saved)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
