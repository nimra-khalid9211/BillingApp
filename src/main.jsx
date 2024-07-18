import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import BillingConditionProvider from './actions/Context/BillingOverviewConditions.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <BillingConditionProvider>

   
    <ToastContainer 
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    // pauseOnFocusLoss
    draggable
    pauseOnHover={false}
    theme="light"
    transition={Bounce}
/>

    <App />


    </BillingConditionProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
