import React from 'react'
import {Link} from 'react-router-dom'


const Boxes = (props) =>{
    return(
        <div>
            <input placeholder={props.lab} type={props.type} className="boxes"></input>
        </div>
    )

}

const SignUp = () =>{
    const pros=[
        {
            labe:"User Name",
            inputname:"",
            type:"text"
        },
        {
            labe:"Full Name",
            inputname:"",
            type:"text"
        },
        {
            labe:"E-mail",
            inputname:"",
            type:"text"
        },
        {
            labe:"DOB",
            inputname:"",
            type:"date"
        },
        {
            labe:"Password",
            inputname:"",
            type:"password"
        },
        {
            labe:"Confirm Password",
            inputname:"",
            type:"password"
        },
    ]
    return(
        <div className='maindiv'>
        <div className='box'>
            <h2 className='regis'>Registration</h2>
            <hr/>
            <form>
                {pros.map((e)=><Boxes lab={e.labe} type={e.type}/>)}
                <Link  to="/createaccount" className='dontlink'>
                  <p>Have an account</p>
                </Link>
                <button type='submit'className='sub-button'>Sign Up</button>
            </form>
        </div>
    </div>
    )
}

export default SignUp
