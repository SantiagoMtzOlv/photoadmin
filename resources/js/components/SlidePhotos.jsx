import { Container, Carousel } from "react-bootstrap"
import useAdmin from '../hooks/useAdmin'

const SlidePhotos = () => {

    const { photos } = useAdmin();

  return (
    <Container>
        <Carousel>
            {photos.map(photo => (
                <Carousel.Item key={photo.id}>
                    <img
                    className="d-block w-100"
                    src={`/storage/${photo.photo_path}`}
                    alt={photo.title}
                    />
                    <Carousel.Caption>
                    <p>{photo.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    </Container>
  )
}

export default SlidePhotos