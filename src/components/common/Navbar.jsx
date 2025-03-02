import React, { useState } from 'react'
import { HiOutlineUser, HiShoppingBag } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CartDrawer from '../layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawer, setNavDrawer] = useState(false)
    const toggleNavDrawer = () =>{
        setNavDrawer(!navDrawer)
    }
    const toggleCartDrawer = () =>{
        setDrawerOpen(!drawerOpen)
    }
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                <div>
                    <Link to="/" className='text-2xl font-medium'>
                        Eshop
                    </Link>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <Link to="/collection/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Men
                    </Link>
                    <Link to="/collection/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Women
                    </Link>
                    <Link to="/collection/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        TopWare
                    </Link>
                    <Link to="/collection/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        BottomWare
                    </Link>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/profile" className=' hover:text-black'>
                        <HiOutlineUser className='h-6 w-6 text-gray-700' />
                    </Link>
                    <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                        <HiShoppingBag className='h-6 w-6 text-gray-700' />
                        <span className='absolute -top-1 bg-[/collection/allea2e0e] text-white text-xs rounded-full px-1'>3</span>
                    </button>
                    <div className='overflow-hidden'>
                        <SearchBar />
                    </div>
                    <button className='md:hidden' onClick={toggleNavDrawer}>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                    </button>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

            {/* Mobile Navigation */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawer ? "translate-x-0"  : "-translate-x-[110%]"}`}>
                <div className='flex justify-end p-4'>
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className='h-6 w-6 text-gray-600' />
                    </button>
                </div>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav className='mt-4 flex flex-col gap-5 '>
                    <Link to="/collection/all" onClick={toggleNavDrawer} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Men
                    </Link>
                    <Link to="/collection/all" onClick={toggleNavDrawer} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Women
                    </Link>
                    <Link to="/collection/all" onClick={toggleNavDrawer} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        TopWare
                    </Link>
                    <Link to="/collection/all" onClick={toggleNavDrawer} className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        BottomWare
                    </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar