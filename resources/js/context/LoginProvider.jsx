import { useState, createContext } from "react";
import axios from 'axios';

const LoginContext = createContext();

const LoginProvider = ({children}) => {

    const [alerta, setAlerta] = useState('')

    const iniciarSesion = async (user) => {
        try {
            const { email, password } = user
            const url = `api/loginapi`;
            
            const res = await axios.post(url, { email: email, password: password });
            console.log(res)
            if(res.status === 200){
                const data = res.data;
                localStorage.setItem('access_token', data.accessToken);
                window.location.href = "/admin";
            }

        } catch (error) {
            console.log(error)
            setAlerta('Usuario NO Existe')
        }
    }
    return (
        <LoginContext.Provider
            value={{ 
                alerta,
                setAlerta,
                iniciarSesion,
             }}
        >
            {children}
        </LoginContext.Provider>
    )
}
export {
    LoginProvider
}
export default LoginContext;