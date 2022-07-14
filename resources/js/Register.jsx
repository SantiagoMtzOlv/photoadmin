import React from 'react';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterView from './components/RegisterView';

import { RegisterProvider } from './context/RegisterProvider';

export default function Register(){
    return(
        <RegisterProvider>
            <RegisterView/>
        </RegisterProvider>
    );
}

if(document.getElementById('app-register')){
    createRoot(document.getElementById('app-register')).render(<Register />)
}