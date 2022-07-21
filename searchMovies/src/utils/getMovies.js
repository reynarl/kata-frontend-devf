import axios from 'axios'

const apikey = 'b302aed6'

const getMovies = async (query = 'batman') => {
  return await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${query}`)
}

export default getMovies
