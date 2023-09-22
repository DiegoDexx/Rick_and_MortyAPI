import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/personaje'
const CreatePersonaje = () => {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [species, setSpecies] = useState('')
    const [gender, setGender] = useState('')
    const [url, setUrl] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, status: status, species: species, gender: gender, url: url})
        navigate('/')

    }
  return (
    <div>
        <h2>Crear un nuevo personaje</h2>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={name} 
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Estado</label>
                <input 
                    value={status} 
                    onChange={ (e)=> setStatus(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Especie</label>
                <input 
                    value={species} 
                    onChange={ (e)=> setSpecies(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Genero</label>
                <input 
                    value={gender} 
                    onChange={ (e)=> setGender(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Url a Imagen</label>
                <input 
                    value={url} 
                    onChange={ (e)=> setUrl(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Guardar</button>
        </form>
    </div>
  )
}

export default CreatePersonaje
