import { useState, createContext, useEffect } from "react";
import axios from 'axios';

const AdminContext = createContext();

const AdminProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [alerta, setAlerta] = useState('');
    const [photos, setPhotos] = useState([]);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const getCategories = async() => {
            const url = '/api/categories';
            const response = await axios(url);
            setCategories(response.data)
        }
        getCategories();
    }, [])

    useEffect(() => {
        const showPhotos = async() => {
            //Mostrar las fotos de cada usuario
            const url = '/api/photos';
            const response = await axios(url);
            setPhotos(response.data);
        }
        showPhotos();
    }, [reload])

    const createUser = async(datos) => {
        //Crear Usuario
        try{
            const {title, description, photo, categorie} = datos;
            const url = '/api/photos/create';
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("photo", photo);
            formData.append("categorie", categorie);
            console.log(formData);
            const response = await axios({
                method: "post",
                url: url,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
              });
              console.log(response);
              setReload(!reload)
        }
        catch(error){
            console.log(error)
        }
    }
    const deleteUser = async(photo) => {
        //eliminar usuario
        const url = '/api/photos/delete/'
        const response = await axios.post(url, { photo: photo });
        console.log(response)
        setReload(!reload);
    }

    const activePhoto = async(photo) =>{
        const url = '/api/photos/active';
        const response = await axios.post(url, { photo: photo });
        console.log(response);
        setReload(!reload);
    }
    const deactivePhoto = async(photo) =>{
        const url = '/api/photos/deactive';
        const response = await axios.post(url, { photo: photo });
        console.log(response);
        setReload(!reload);
    }

    return (
        <AdminContext.Provider
            value={{ 
                categories,
                alerta,
                photos,
                setAlerta,
                createUser,
                deleteUser,
                activePhoto,
                deactivePhoto
             }}
        >
            {children}
        </AdminContext.Provider>
    )
}
export {
    AdminProvider
}
export default AdminContext;