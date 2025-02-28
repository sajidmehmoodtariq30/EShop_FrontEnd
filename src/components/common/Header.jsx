import React from 'react'
import Topbar from '../layout/TopBar.jsx'
import Navbar from './Navbar.jsx'
import CartDrawer from '../layout/CartDrawer.jsx'

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
        <Topbar/>
        <Navbar />
        {/* <CartDrawer /> */}
    </header>
  )
}

export default Header