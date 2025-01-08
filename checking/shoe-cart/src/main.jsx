
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop/>
    <App />
    
  </BrowserRouter>
)
