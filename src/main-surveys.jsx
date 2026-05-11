import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import PageShell from './components/PageShell'
import Surveys from './pages/Surveys'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageShell><Surveys /></PageShell>
  </React.StrictMode>,
)
