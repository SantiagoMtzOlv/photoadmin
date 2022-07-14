import axios from "axios";
import { Table, Container, Button, Image, Alert } from "react-bootstrap"
import useAdmin from "../hooks/useAdmin"

const UserPhotos = () => {

    const { photos, deleteUser, activePhoto, deactivePhoto, categories } = useAdmin();


  return (
    <Container>
        <Table striped bordered hover variant="dark" className="border border-1 border-warning">
            <thead>
            <tr>
                <th>Title</th>
                <th>Photo</th>
                <th>Categorie</th>
                <th>Description</th>
                <th>Options</th>
            </tr>
            </thead>
            <tbody>
            {photos.map( photo => (
                <tr key={photo.id}>
                    <td>{photo.title}</td>
                    <td><Image src={`/storage/${photo.photo_path}`} fluid className="imagen"/> </td>
                    {categories.map(item => 
                        item.id === photo.categorie_id ? <td key={item.id}>{item.nombre}</td> : null
                    )}
                    <td>{photo.description}</td>
                    <td className="gap-3">
                        {photo.active === 0 ? 
                            <Button variant="success" onClick={() => activePhoto(photo.id)}>Active</Button> 
                        :   <Button variant="secondary" onClick={() => deactivePhoto(photo.id)}>Deactive</Button>}
                        <Button variant="danger" onClick={() => deleteUser(photo.id)}>Delete</Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    </Container>
  )
}

export default UserPhotos