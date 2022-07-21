import axios from 'axios'

const apikey = 'b302aed6'
const urlBase = `http://www.omdbapi.com/?apikey=${apikey}`

// busca todas las películas
export const getMovies = async (query) => {
  return await axios.get(`${urlBase}&s=${query}`)
}

// busca por id
export const getMovie = async (id) => {
  return await axios.get(`${urlBase}&i=${id}`)
}
