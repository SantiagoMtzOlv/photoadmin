import React from 'react';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginView from './components/LoginView';

import { LoginProvider } from './context/LoginProvider';

export default function Login(){
    return(
        <LoginProvider>
            <LoginView/>
        </LoginProvider>
    );
}

if(document.getElementById('app-login')){
    createRoot(document.getElementById('app-login')).render(<Login />)
}