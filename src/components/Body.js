import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'

const Body = () => {
  return (
    <div className='flex'>

        <Sidebar/>

        <Outlet/>
        {/* <Maincontainer/>
        <watchPage/> */}
    </div>
  )
}

export default Body