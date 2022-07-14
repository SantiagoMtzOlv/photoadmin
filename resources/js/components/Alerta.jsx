import Alert from 'react-bootstrap/Alert';

const Alerta = ({children}) => {

    return (
        <Alert variant='danger'>
          {children}
        </Alert>
    )
}
export default Alerta;