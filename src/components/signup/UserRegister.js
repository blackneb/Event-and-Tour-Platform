import React, { useState } from 'react';
import './userregister.css';
import SignIn from './SignIn';
import SignUp from './SignUp';



const UserRegister = (props) => {
    const[issignin,setsignin]=useState(true);
  return (
      <div className='selector'>
          <button className='select-signup' onClick={()=>setsignin(true)}>Register</button>
          <button className='select-signin' onClick={()=>setsignin(false)}>Login</button>
      {issignin? <SignUp/> : <SignIn/>}
      </div>
  )
}

export default UserRegister
