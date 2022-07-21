import React from 'react'

import '../styles/Cards.css'

const Cards = ({ Title, Poster, Year, imdbID }) => {
  return (
    <div className='card'>
      <img src={Poster} alt={Title} />
      <p>{Title}</p>
      <p>{Year}</p>
    </div>
  )
}

export default Cards
