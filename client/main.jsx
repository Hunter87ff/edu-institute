import { lazy } from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './assets/index.css'

const Home = lazy(() => import('./pages/info/Home'));
const Student = lazy(() => import('./pages/student/Student'));
const Dashboard = lazy(() => import('./pages/org/Dashboard'));
const TeachersDashboard = lazy(() => import('./pages/org/TeachersDashboard'));
const About = lazy(() => import('./pages/info/About'));
const E404 = lazy(() => import('./pages/error/E404'));
const AdmissionCriteria = lazy(() => import('./pages/info/other/AdmissionCriteria'));
const AdmissionApplication = lazy(() => import('./pages/info/other/AdmissionApplication'));



createRoot(document.getElementById('root')).render(

    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student/>}/>
        <Route path='/teacher' element={<TeachersDashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/admissions/criteria' element={<AdmissionCriteria/>}/>
        <Route path='/admissions/application' element={<AdmissionApplication/>}/>
        <Route path='*' element={<E404/>}/>
      </Routes>
    </BrowserRouter>
)
