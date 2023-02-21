import React from 'react'
import LeftImg from '../images/LeftImg.png'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${LeftImg})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='Post'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full Name' type='text'/>

                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter Your Email' type='email'/>

                <label htmlFor='message'>Message</label>
                <textarea rows='6' placeholder='Enter Message' name='message' required> </textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact