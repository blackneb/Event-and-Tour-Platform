import React from 'react'
import { BrowserRouter,Router, Route,Switch, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Contact from './components/Contact'
import Events from './components/Events'
import Home from './components/Home'
import Howto from './components/Howto'
import Signup from './components/Signup'
import Tour from './components/Tour'
import Trending from './components/Trending'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/howto' element={<Howto/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/tour' element={<Tour/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
