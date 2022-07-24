import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import App from './components/App'
import Paths from './routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      {/* <App /> */}
      <Paths />
    </BrowserRouter>
  </>
)
