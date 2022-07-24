import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data'

const Product = () => {
  const { productId } = useParams()
  const navigate = useNavigate()

  // 1. hacemos un find para que encuentre la primera coincidencia en products donde el id de products, sea igual a productId.
  // 2. convertimos a number porque productId era String
  // 3. find devuelve un objeto y filter devuelve un arreglo, por lo que, nos conviene usar find en este caso.
  const uniqueProduct = products.find(item => item.id === Number(productId))
  console.log(uniqueProduct)

  useEffect(() => {
    uniqueProduct === undefined && navigate('/404')
  }, [])

  return (
    <article>
      <img src={uniqueProduct?.thumbnail} alt={uniqueProduct?.title} className='img-fluid' height={150} style={{ objectFit: 'cover' }} />
      <div>
        <p>{uniqueProduct?.title}</p>
        <p>{uniqueProduct?.description}</p>
      </div>
    </article>
  )
}

export default Product
