import { useState, createContext } from "react";
import axios from 'axios';

const RegisterContext = createContext();

const RegisterProvider = ({children}) => {

    const [alerta, setAlerta] = useState('')

    const crearUsuario = async (user) => {
        try {
            const { name, email, password } = user
            const url = `api/register`;
            
            const res = await axios.post(url, { name: name, email: email, password: password });
            console.log(res)
            if(res.status === 200){
                window.location.href = "/login";
            }

        } catch (error) {
            console.log(error)
            setAlerta('No se pudo crear usuario, intentelo más tarde.')
        }
    }

    return (
        <RegisterContext.Provider
            value={{ 
                alerta,
                setAlerta,
                crearUsuario
             }}
        >
            {children}
        </RegisterContext.Provider>
    )
}
export {
    RegisterProvider
}
export default RegisterContext;