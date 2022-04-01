import React from 'react'

const Boxes = (props) =>{
    return(
        <div>
            <input placeholder={props.lab} className="boxes"></input>
        </div>
    )

}

const SignIn=()=>{
    const pros=[
        {
            labe:"User Name",
            inputname:""
        },
        {
            labe:"Password",
            inputname:""
        },
    ]
    return(
        <div className='maindiv'>
        <div className='box'>
            <h2 className='regis'>Login</h2>
            <hr/>
            <form>
                {pros.map((e)=><Boxes lab={e.labe}/>)}
                <p><a className='dontlink'>Don't have an account?</a></p>
                <input type="submit" className='sub-button' value="Sign in"/>
            </form>
        </div>
    </div>
    )
}


export default SignIn
