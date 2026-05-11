import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import PageShell from './components/PageShell'
import About from './pages/About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageShell><About /></PageShell>
  </React.StrictMode>,
)
