import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {

    const location = window.location.pathname;


  return (
    <Container>
        <Navbar >
          <Container>
            <Navbar.Brand href='/' className='text-warning '><h2>PhotoAdmin</h2></Navbar.Brand>
            <Nav className="mr-auto gap-3">
              {location === '/admin' ? <Nav.Link href="/logout" className='text-warning enlace'>Logout</Nav.Link> 
              : (<>
                <Nav.Link href="/login" className='text-warning enlace'>Login</Nav.Link>
                <Nav.Link href="/register" className='text-warning enlace'>Register</Nav.Link>
              </>)}
            </Nav>
          </Container>
        </Navbar>
      </Container>
  )
}

export default Header