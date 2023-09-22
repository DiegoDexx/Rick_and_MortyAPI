import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/personaje/'

const EditPersonaje = () => {

    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [species, setSpecies] = useState('')
    const [gender, setGender] = useState('')
    const [url, setUrl] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            name: name,
            status: status,
            species: species,
            gender: gender,
            url: url
        })
        navigate('/')
    }

    useEffect( () =>{

        const getPersonajeById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setStatus(response.data.status)
            setSpecies(response.data.species)
            setGender(response.data.gender)
            setUrl(response.data.url)
        }
        getPersonajeById()
        
    }, [])
  return (
    <div>
        <h2>Editar un personaje</h2>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                    value={name} 
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Status</label>
                <input 
                    value={status} 
                    onChange={ (e)=> setStatus(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Species</label>
                <input 
                    value={species} 
                    onChange={ (e)=> setSpecies(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Gender</label>
                <input 
                    value={gender} 
                    onChange={ (e)=> setGender(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Url</label>
                <input 
                    value={url} 
                    onChange={ (e)=> setUrl(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default EditPersonaje
