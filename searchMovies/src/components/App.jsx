import { useRef } from 'react'
import '../styles/App.css'

function App () {
  const search = useRef(null) // a través de useref puedo capturar el valor de un formulario

  const handleSubmit = (e) => {
    e.preventDefault() // Evitamos que el navegador se recarge
    console.log(search.current.value)
    // console.log(e.target.buscador.value) // otra opcion es con target y acceder al objeto con name='buscador' y luego al valor
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
    </section>
  )
}

export default App
