import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import PageShell from './components/PageShell'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageShell><Contact /></PageShell>
  </React.StrictMode>,
)
