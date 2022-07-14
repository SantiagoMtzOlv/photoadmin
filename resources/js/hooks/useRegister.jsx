import { useContext } from 'react'
import RegisterContext from '../context/RegisterProvider'

const useRegister = () =>{
    return useContext(RegisterContext)
}
export default useRegister;