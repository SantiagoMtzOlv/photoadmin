import React from 'react';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminView from './components/AdminView';

import { AdminProvider } from './context/AdminProvider';

import '../css/styles.css';

export default function Admin(){
    return(
        <AdminProvider>
            <AdminView/>
        </AdminProvider>
    );
}

if(document.getElementById('app-admin')){
    createRoot(document.getElementById('app-admin')).render(<Admin />)
}