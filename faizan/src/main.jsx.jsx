import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AdminProvider } from './components/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <AdminProvider>
       <App />
     </AdminProvider>
     
    </BrowserRouter>
    
  </StrictMode>,
)

//first
// 1 use parent folder eg vite project and open terminal then write npm install react-router-dom axios
// 2 import {BrowserRouter} from 'react-router-dom' // then wrap it
//3  go to app.jsx to set routes by importing Routes and Route