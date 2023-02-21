import React from 'react'
import MultiFood from '../images/MultiFood.png'
import './About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiFood})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>
              ‘Asian Food’ menu is solid and yummy. Our many fulfilled clients realize 
              we pride ourselves on the tasty and flesh food from our kitchen to your 
              table. Your total fulfillment is our objective, and we back that up with our 
              Asian Food Guarantee.
            </p>
        </div>
    </div>
  )
}

export default About