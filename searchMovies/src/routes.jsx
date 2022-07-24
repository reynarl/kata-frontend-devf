import { Routes, Route } from 'react-router-dom'
import App from './components/App'
import Nabvar from './components/Nabvar'

const Paths = () => {
  return (
    <section>
      <Nabvar />
      {/* Routes es un componente que envuelve a route y route es un componente que recibe props */}
      <Routes>
        {/* Ctrl + espacio para saber que puede recibir ese componente */}
        <Route path='/' element={<p>Home</p>} />
        <Route path='about' element={<p>Ablout</p>} />
        <Route path='pricing' element={<App />} />
      </Routes>
    </section>
  )
}

export default Paths
