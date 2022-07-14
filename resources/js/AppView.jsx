import { Container } from 'react-bootstrap'
import Header from './components/Header';
import AllPhotos from './components/AllPhotos';
import '../css/styles.css';


const AppView = () => {
  return (
    <>
      <Header />
      <Container className='text-center mt-5'>
        <AllPhotos />
      </Container>
    </>
  )
}

export default AppView