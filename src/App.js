import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Contact from './components/Contact'
import Events from './components/Events'
import Home from './components/Home'
import Howto from './components/Howto'
import Tour from './components/Tour'
import Trending from './components/Trending'
import Footer from './components/Footer'
import Admins from './components/Admins'
import UserRegister from './components/signup/UserRegister'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events choose="favourite"/>}/>
        <Route path='/howto' element={<Howto/>}/>
        <Route path='/signup' element={<UserRegister sign={true}/>}/>
        <Route path='/tour' element={<Tour/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admins' element={<Admins/>}/>
        <Route path='/createaccount' element={<UserRegister sign={false}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
