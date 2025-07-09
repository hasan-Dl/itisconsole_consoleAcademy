import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Revenue from './pages/Revenue'
import B2C from './pages/B2C'
import Other from './pages/Other'
import Students from './pages/Students'
import InputForAddCourses from './components/B2C/InputForAddCourses'
import Layout from './layout/Layout' 
import B2B from './pages/B2B'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/revenue' element={<Revenue />} />
        <Route path='/expenses/b2c'>
          <Route index element={<B2C />} />
           <Route path='add_courses' element={<InputForAddCourses />} />
          <Route path=':one_course' element={<Students />} />
        </Route>
        <Route path='/expenses/b2b' element={<B2B />} />
        <Route path='/expenses/other' element={<Other />} />
      </Route>
    </Routes>
  )
}
