import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, Link} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Home from './pages/Home'
import UserDetails from './pages/UserDetails'



function App() {
  return (
    <>
        <nav>
          <Link to='/'>Home</Link>
         
          <Link to='/dashboard'>Dashboard</Link>
        </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetails />} />



        </Route>

      </Routes>
    </>
  )
}

export default App
