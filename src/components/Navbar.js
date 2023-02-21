import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const[openLinks, setOpenLinks] = useState(false)

    const toggleNav = () => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className='navbar'>
        <div className='leftNav' id={openLinks ? 'open' : 'close'}>
            <img src={ Logo } />
            <div className='hiddenLinks'>
                <Link to='/'> Home </Link>
                <Link to='/menu'> Menu </Link>
                <Link to='/about'> About </Link>
                <Link to='/contact'> Contact </Link>
            </div>
        </div>
        <div className='rightNav'>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact </Link>
            <button onClick={toggleNav}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar