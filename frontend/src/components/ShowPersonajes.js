import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowPersonajes = () => {

    const [personajes, setPersonajes] = useState([])
    useEffect ( ()=> {
        getAllPersonajes()
    }, [])

    const getAllPersonajes = async () => {
        const response = await axios.get(`${endpoint}/personajes`)
        setPersonajes(response.data)
    }

    const deletePersonaje = async (id) => {

       await axios.delete(`${endpoint}/personaje/${id}`)
       getAllPersonajes()
         
    }
  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Añadir Personaje</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Especie</th>
                    <th>Genero</th>
                    <th>Url Imagen</th>
                </tr>
            </thead>
            <tbody>
                { personajes.map( (personaje) => (
                    <tr key={personaje.id}>
                        <td>{personaje.name}</td>
                        <td>{personaje.status}</td>
                        <td>{personaje.species}</td>
                        <td>{personaje.gender}</td>
                        <td>{personaje.url}</td>
                        <td></td>
                        <td>
                            <Link to={`/edit/${personaje.id}`} className='btn btn-info'>Editar</Link>
                            <button onClick={ ()=>deletePersonaje(personaje.id)} className='btn btn-danger'>Borrar</button>
                        </td>
                    </tr>
                ))}                
            </tbody>
        </table>
    </div>
  )
}

export default ShowPersonajes
