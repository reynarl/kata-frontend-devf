import { useRef } from 'react'
import useFetcher from '../hooks/useFetcher'

import '../styles/App.css'

import ShowMovies from './ShowMovies'
import Spinner from './Spinner'
import getMovies from '../utils/getMovies'

function App () {
  const search = useRef(null) // a través de useref puedo capturar el valor de un formulario

  // destructurando useFetcher donde devolvemos los valores como objeto
  const { movies, loading, error } = useFetcher()

  const handleSubmit = async (e) => {
    e.preventDefault() // Evitamos que el navegador se recarge
    // console.log(e.target.buscador.value) // otra opcion es con target y acceder al objeto con name='buscador' y luego al valor
    const inputVal = search.current.value
    const { data } = await getMovies(inputVal)
    // if (data.Response === 'False') {
    //   setError(data.Error)
    //   setMovies([])
    // } else {
    //   setMovies(data.Search)
    // }
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
