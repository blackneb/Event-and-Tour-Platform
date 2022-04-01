import React from 'react';
import profile from './image.png';
import './home.css'
import ContactPage from './contact/ContactPage';
import SignUp from './signup/SignUp';
const Card = () =>{
  return(
    <div className='cards'>
        <div className='card-layout'>
          <h3>Name</h3>
          <img src={profile} className="pic"/>
          <h4>Price: </h4>
          <h4>Description: </h4>
          <h5>show more</h5>
        </div>
      </div>
  )
}

const Home = () => {
  return (
    <div>
      <h3 className='header-of-names'>New Events</h3>
      <div className='cards-display'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <h3 className='header-of-names'>Tours</h3>
      <div className='cards-display'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <h3 className='header-of-names'>How to use</h3>
      <div className='contact-shadow'>
      <h3 className='header-of-names'>Contact Our Admins</h3>
      <ContactPage/>
      </div>
      <div className='contact-shadow'>
      <h3 className='header-of-names'>Create Account and join our Team</h3>
      <SignUp/>
      </div>
      
    </div>
  )
}

export default Home
