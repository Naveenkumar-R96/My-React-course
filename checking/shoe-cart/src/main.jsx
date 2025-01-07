
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom'
import App from './App.jsx'
import AllRoutes from './Components/AllRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <AllRoutes/>
  </BrowserRouter>
)
