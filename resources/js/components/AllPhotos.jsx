import { useState, useEffect } from "react"
import axios from "axios"
import { Container, Carousel, Alert } from "react-bootstrap"

const AllPhotos = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const getPhotos = async() => {
            const url = '/api/allphotos'
            const response = await axios(url);
            setPhotos(response.data);
        }
        getPhotos();
    }, [])

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

export default AllPhotos