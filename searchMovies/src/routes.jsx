import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
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

        {/* Crear ruta dinámica con useParams()
            1. le mandamos en path una clave única(id) en este caso lo llamamos :productId  siempre lleva los :
            2. Luego haremos la ruta dinámica dentro products.jsx */}
        {/* <Route path='products/:productId' element={<Product />} /> */}
        {/* RUTAS ANIDADAS (Nested routes) CON Outlet -> ejem. /products/3 */}
        <Route path='/products' element={<Outlet />}> {/* <--Elemento padre */}
          <Route> {/* <--Elemento hijo donde estarán todas las rutas heredan de padre */}
            <Route index element={<Products />} /> {/* <- Elemento principal */}
            <Route path=':productId' element={<Product />} />
          </Route>
        </Route>

        <Route path='/movies' element={<App />} />
        <Route path='/404' element={<p>404</p>} />
        <Route path='*' element={<Navigate to='/404' />} /> {/* <- El *  hace referencia a si no existe esa ruta */}
      </Routes>
    </section>
  )
}

export default Paths
