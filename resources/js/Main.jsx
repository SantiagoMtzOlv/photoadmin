import React from 'react';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppView from './AppView';


export default function Main(){
    return(
        <AppView/>
    );
}

if(document.getElementById('app')){
    createRoot(document.getElementById('app')).render(<Main />)
}