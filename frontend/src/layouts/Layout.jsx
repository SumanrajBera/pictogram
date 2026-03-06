import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className='layout'>
            <Navbar />
            
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout