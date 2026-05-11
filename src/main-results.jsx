import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import PageShell from './components/PageShell'
import Results from './pages/Results'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageShell><Results /></PageShell>
  </React.StrictMode>,
)
