import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'

const Body = () => {
    const isMenuOpen = useSelector(store=> store.app.isMenuOpen);

    return (
        <div className='grid grid-cols-12'>

            <div className={ isMenuOpen ? `col-span-2` : ''}>
                <Sidebar />
            </div>

            <div className={ isMenuOpen ? 'col-span-10' : 'col-span-12'}>
                <Outlet />

                {/* 
                <Maincontainer/>
                <watchPage/> 
                */}

            </div>
        </div>
    )
}

export default Body