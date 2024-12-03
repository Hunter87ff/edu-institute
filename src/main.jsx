import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Student from './pages/Student.jsx'

import TeacherDashboard from './pages/TeachersDashboard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/student" element={<Student/>}/>
        <Route path='/teacher' element={<TeacherDashboard/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
