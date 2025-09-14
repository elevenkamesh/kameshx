import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LoginComponent from './componnets/login.jsx'
import ProjectPage from './componnets/project.jsx'
import NavBar from './componnets/navbar.jsx'
import Footer from './componnets/footer.jsx'
import AddProject from './componnets/addproject.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/addproject" element={<AddProject />} />

        
      </Routes>
<Footer />

    </BrowserRouter>
  </StrictMode>,
)