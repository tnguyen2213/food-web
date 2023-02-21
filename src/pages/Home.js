import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg from '../images/BannerImg.png'
import './Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImg})`}}>
        <div className='container'>
            <h1>Asian Foods</h1>
            <p>Taste of Asia</p>
            <Link to='/menu'>
                <button>Order Now!</button>
            </Link>
        </div>
    </div>
  )
}

export default Home