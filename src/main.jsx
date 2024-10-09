import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthorizationProvider from './shared/hooks/authorization/authorizationProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthorizationProvider>
            <App />
        </AuthorizationProvider>
    </BrowserRouter>
)
