import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Home from './components/Home'
import NavFooter from './components/NavFooter'
import Service from './components/Service'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutMe' element={<AboutMe/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/nav' element={<NavFooter/>} />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App