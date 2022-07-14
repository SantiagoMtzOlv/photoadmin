import { useState } from 'react';
import { Container, Navbar, Nav, Button, Modal } from 'react-bootstrap'
import axios from 'axios';
import Formulario from './Formulario';

import useAdmin from '../hooks/useAdmin';

const HeaderAdmin = () => {

  const {} = useAdmin();

  const [show, setShow] = useState(false);

  const logOut = async() => {
    const url = '/api/logout';
    const response = await axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      },
      data: {} // envío un cuerpo (aunque sea un objeto vacío)
    })
    localStorage.removeItem('access_token');
    window.location.href = "/";
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
        <Navbar >
          <Container>
            <Navbar.Text className='text-warning '><h2>PhotoAdmin</h2></Navbar.Text>
            <Nav className="mr-auto gap-3">
                <Navbar.Text>
                    <Button variant='warning' onClick={handleShow}>Add New Photo</Button>
                </Navbar.Text>
                <Navbar.Text>
                  <Button variant='secondary' className='ml-2' onClick={logOut}>Logout</Button>
                </Navbar.Text>
            </Nav>
          </Container>
        </Navbar>
        <Modal 
          show={show} 
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className='bg-dark text-white'>
            <Modal.Title id="contained-modal-title-vcenter">Add New Photo</Modal.Title>
          </Modal.Header>
          <Modal.Body className='bg-dark text-white'>
            <Formulario />
          </Modal.Body>
        </Modal>
      </Container>
  )
}

export default HeaderAdmin