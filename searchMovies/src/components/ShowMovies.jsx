import React from 'react'

import Cards from './Cards'

const ShowMovies = ({ movies }) => {
  return (
    <div className='py-4'>
      {
        movies.length === 0
          ? 'No se encontraron resultados'
          : (
            <ul style={{ listStyle: 'none', paddingInlineStart: 0 }} className='row gx-0 gx-md-5 gy-4'>
              {
              movies.map(item => (
                <li className='col-12 col-md-6 col-lg-4 col-xl-3' key={item.imdbID}>
                  <Cards {...item} />
                </li>
              ))
              } {/* // el spread operator sirve para no estar escribiendo todos los valores del objeto pero los nombres deben ser iguales que el arreglo de la API */}
            </ul>
            )
      }
    </div>
  )
}

export default ShowMovies
