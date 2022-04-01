import React from 'react'
import './contactpage.css'

const Pagesdisplay = (props) =>{
    return(
        <div>
            <label>{props.labe}</label>
            <br/>
            <input type={props.typ} className="text-areas"/>
        </div>
    )
}

const ContactPage = () => {
    const inp=[
        {
            name:"Name: ",
            type:"text"
        },
        {
            name:"E-mail Address: ",
            type:"text"
        },
        {
            name:"Subject: ",
            type:"text"
        }
    ]
  return (
    <div>
        <div className='contactbox'>
            <h2>Contact</h2>
            <form>
                {inp.map((e)=><Pagesdisplay labe={e.name} typ={e.type}/>)}
                <label>Detail:</label>
                <br/>
                <textarea className='text-field'/>
                <br/>
                <input type="submit" className='sub-button'/>
            </form>

        </div>
      
    </div>
  )
}

export default ContactPage
