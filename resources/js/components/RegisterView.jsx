import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap'
import useRegister from '../hooks/useRegister'
import Header from './Header';
import Alerta from './Alerta';

const RegisterView = () => {

  const { alerta, setAlerta, crearUsuario } = useRegister();
  
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleSubmit = e =>{
    e.preventDefault();

    if(Object.values(user).includes('')){
        setAlerta('Ingrese todos los datos.')
        return;
    }
    setAlerta('');
    crearUsuario(user)
  }

  return (
    <>
      <Header />
      <Container className='text-center container-md' fluid='md'>
          {alerta ? <Alerta>{alerta}</Alerta> : null}
          <Form
            className='bg-dark p-3 border border-1 border-warning rounded'
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='text-warning'>Nombre de Usuario</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Nombre de Usuario" 
                name='name' 
                value={user.name}
                onChange={ e => setUser({
                          ...user,
                          [e.target.name] : e.target.value
                      })}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='text-warning'>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Email" 
                name='email' 
                value={user.email}
                onChange={ e => setUser({
                          ...user,
                          [e.target.name] : e.target.value
                      })}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='text-warning'>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                name='password'
                value={user.password}
                onChange={ e => setUser({
                          ...user,
                          [e.target.name] : e.target.value
                      })}
                />
            </Form.Group>

            <Button variant="warning" type="submit">
              Login
            </Button>
          </Form>
      </Container>
    </>
  )
}

export default RegisterView