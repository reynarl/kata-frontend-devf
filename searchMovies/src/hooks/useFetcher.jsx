import { useEffect, useState } from 'react'
import getMovies from '../utils/getMovies'

// los hooks normalmente comienzan con use{NombreHook}
// los hooks no contienen etiquetas html, pues solo se encargan de responder la logica de componentes
// Se deben ejecutar en la cabecera de un componente (no se pueden cargar en condicionales ni ciclos)

const useFetcher = (query = 'batman') => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // useEffect no puede ser asyn por lo tanto creo una funcion dentro para que sea async
  useEffect(() => {
    const getData = async () => {
      const { data } = await getMovies(query)
      if (data.Response === 'False') {
        setError(data.Error)
        setMovies([])
      } else {
        setMovies(data.Search)
        setLoading(false)
      }
    }
    getData()
  }, [query])

  return { movies, loading, error }
}

export default useFetcher
