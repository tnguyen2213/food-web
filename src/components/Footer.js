import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='media'>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
        </div>
    </div>
  )
}

export default Footer