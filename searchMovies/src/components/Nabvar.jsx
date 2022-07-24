import React from 'react'
import { NavLink } from 'react-router-dom'

const Nabvar = () => {
  return (
    <section>
      <nav className='navbar navbar-expand-sm bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>Navbar</a>
          <div>
            <div className='navbar-nav'>
              {/* en lugar de href='' que dirige a la ruta, usamos to='' */}
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/products'>Products</NavLink>
              <NavLink className='nav-link' to='/movies'>Movies</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Nabvar
