import { useRef, useState } from 'react'
import useFetcher from '../hooks/useFetcher'

import '../styles/App.css'

import ShowMovies from './ShowMovies'
import Spinner from './Spinner'

function App () {
  const search = useRef(null) // a través de useref puedo capturar el valor de un formulario
  const [query, setQuery] = useState('batman')
  // destructurando useFetcher donde devolvemos los valores como objeto
  const { movies, loading } = useFetcher(query)

  // const optional = {}
  // console.log(optional?.name || 'reyna') // cuando el valor no existe al principio podemos poner ? para que lo podamos usar la proxima vez que exista

  const handleSubmit = async (e) => {
    e.preventDefault() // Evitamos que el navegador se recarge
    // console.log(e.target.buscador.value) // otra opcion es con target y acceder al objeto con name='buscador' y luego al valor
    const inputVal = search.current.value
    // const { data } = await getMovies(inputVal)
    // if (data.Response === 'False') {
    //   setError(data.Error)
    //   setMovies([])
    // } else {
    //   setMovies(data.Search)
    // }
    setQuery(inputVal)
    e.target.reset() // borra los campos de los input del form al darle en el boton buscar
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
