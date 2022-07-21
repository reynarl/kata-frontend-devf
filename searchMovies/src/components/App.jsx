import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

import '../styles/App.css'

import ShowMovies from './ShowMovies'
import Spinner from './Spinner'

const apikey = 'b302aed6'

function App () {
  const search = useRef(null) // a través de useref puedo capturar el valor de un formulario
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getMovies = async (query = 'batman') => {
    return await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${query}`)
  }

  // useEffect no puede ser asyn por lo tanto creo una funcion dentro para que sea async
  useEffect(() => {
    const getData = async () => {
      const { data } = await getMovies()
      setMovies(data.Search)
      setLoading(false)
    }
    getData()
  }, [])

  console.log(movies)

  const handleSubmit = async (e) => {
    e.preventDefault() // Evitamos que el navegador se recarge
    // console.log(e.target.buscador.value) // otra opcion es con target y acceder al objeto con name='buscador' y luego al valor
    const inputVal = search.current.value
    const { data } = await getMovies(inputVal)
    if (data.Response === 'False') {
      setError(data.Error)
      setMovies([])
    } else {
      setMovies(data.Search)
    }
  }

  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscador de Películas</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            ref={search}
            type='search'
            className='form-control'
            placeholder='Buscar pelicula..'
            name='buscador'
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
      {loading ? <Spinner /> : <ShowMovies movies={movies} />}
    </section>
  )
}

export default App
