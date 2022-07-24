import { products } from '../data'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <ul className='row gy-3'>
      {
        products.map(item =>
          <li className='col-lg-3' key={item.id}>
            {/* lo enlazamos con las ruta que habíamos creado en route:
                <Route path='products/:productId' element={<Product />} />  */}
            <Link to={`/products/${item.id}`}>
              <article className='card text-dark'>
                <img src={item.thumbnail} alt={item.title} className='card-img-top' height={150} style={{ objectFit: 'cover' }} />
                <div className='card-body'>
                  <p className='card-title'>{item.title}</p>
                </div>
              </article>
            </Link>
          </li>
        )
      }
    </ul>
  )
}

export default Products
