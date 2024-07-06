import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import BillingConditionProvider from './actions/Context/BillingOverviewConditions.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BillingConditionProvider>
    <App />
    </BillingConditionProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
