import {useState} from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import useAdmin from '../hooks/useAdmin';
import Alerta from './Alerta';
const Formulario = () => {

    const { categories, alerta, setAlerta, createUser } = useAdmin();
    const [datos, setDatos] = useState({
        title: '',
        description: '',
        photo : '',
        categorie: '1',
    })

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(Object.values(datos).includes('')){
            setAlerta('Ingrese todos los datos.')
            return;
        }
        setAlerta('');
        createUser(datos);
    }
  return (
    <>
        {alerta ? <Alerta>{alerta}</Alerta> : null}
        <Form
            className='bg-dark p-3 border border-1 border-warning rounded'
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-warning'>Title</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Title" 
                name='title'
                value={datos.title}
                onChange={ e => setDatos({
                            ...datos,
                            [e.target.name] : e.target.value
                        })}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-warning'>Description</Form.Label>
                <Form.Control 
                type="description" 
                placeholder="Description" 
                name='description' 
                value={datos.description}
                onChange={ e => setDatos({
                            ...datos,
                            [e.target.name] : e.target.value
                        })}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-warning'>Photo</Form.Label>
                <Form.Control 
                type="file"
                accept=".png, .jpg, .jpeg"
                name='photo'
                onChange={ e => setDatos({
                            ...datos,
                            [e.target.name] : e.target.files[0]
                        })}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-warning'>Categoría</Form.Label>
                <Form.Select  
                name='categorie'
                value={datos.categorie}
                onChange={ e => setDatos({
                            ...datos,
                            [e.target.name] : e.target.value
                        })}
                >
                    {categories.map(categorie => (
                        <option key={categorie.id} value={categorie.id}>{categorie.nombre}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Button variant="warning" type="submit">
                Add
            </Button>
        </Form>
    </>
  )
}

export default Formulario