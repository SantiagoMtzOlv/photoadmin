import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import HeaderAdmin from "./HeaderAdmin"
import SlidePhotos from './SlidePhotos'
import UserPhotos from './UserPhotos'

const AdminView = () => {
  return (
    <>
      <HeaderAdmin />
      <Container>
        <SlidePhotos />
      </Container>
      <Container className='mt-4'>
        <UserPhotos />
      </Container>
    </>
  )
}

export default AdminView