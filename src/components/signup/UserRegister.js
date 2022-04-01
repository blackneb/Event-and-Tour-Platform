import './userregister.css';
import SignIn from './SignIn';
import SignUp from './SignUp';



const UserRegister = (props) => {
    return (
      <div className='selector'>
      {props.sign? <SignUp/> : <SignIn/>}
      </div>
  )
}

export default UserRegister
