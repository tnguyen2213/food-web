import React from 'react'
import { MenuList } from '../components/MenuList'
import MenuItem from '../components/MenuItem'
import './Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, key) => {
               return <MenuItem key={key} name={menuItem.name} image={menuItem.image} price={menuItem.price}/>
                
            })}
        </div>
    </div>
  )
}

export default Menu