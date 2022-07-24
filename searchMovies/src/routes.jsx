import { Routes, Route } from 'react-router-dom'
import App from './components/App'
import Nabvar from './components/Nabvar'
import Products from './components/Products'
import Product from './components/Product'

const Paths = () => {
  return (
    <section>
      <Nabvar />
      {/* Routes es un componente que envuelve a route y route es un componente que recibe props */}
      <Routes>
        {/* Ctrl + espacio para saber que puede recibir ese componente */}
        <Route path='/' element={<p>Home</p>} />
        <Route path='products' element={<Products />} />
        {/* Crear ruta dinámica con useParams()
            1. le mandamos en path una clave única(id) en este caso lo llamamos :productId  siempre lleva los : 
            2. Luego haremos la ruta dinámica dentro products.jsx */}
        <Route path='products/:productId' element={<Product />} />
        <Route path='movies' element={<App />} />
      </Routes>
    </section>
  )
}

export default Paths
