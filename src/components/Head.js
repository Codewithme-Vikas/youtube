import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";

import { useDispatch } from 'react-redux';
import { toggleMenu } from '../slices/appSlice';

function Head() {

    const dispatch = useDispatch();


    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu())
    }

    return (
        <div className='flex justify-between items-center p-3 gap-10 shadow-sm  '>

            {/* logo and humbarger */}
            <div className='flex gap-6 items-center'>

                <button onClick={ toggleMenuHandler } className='p-1'>
                    <GiHamburgerMenu fontSize={20} />
                </button>

                <a href='/' className='flex items-center justify-center gap-1 font-semibold'>
                    <TbBrandYoutubeFilled fontSize={30} color='red' />
                    Youtube
                </a>

            </div>

            {/* search bar */}
            <div className='flex items-center gap-4 flex-auto'>

                <div className='w-full flex'>

                    <input type='text' placeholder='Search' className='p-2 pl-6 rounded-l-full w-full border border-slate-500 outline-blue-500 outline-2' />

                    <button className='border border-slate-500 p-2 pr-6  rounded-r-full'>
                        <IoSearch size={20} />
                    </button>

                </div>

                <button className='rounded-full p-4 bg-slate-50 hover:bg-slate-100'>
                    <FaMicrophone size={20} />
                </button>

            </div>


            {/* create, notification and account */}
            <div className='flex gap-4 items-center'>

                <RiVideoAddLine size={25} />

                <IoMdNotificationsOutline size={25} />

                <FaUserCircle size={25} />


            </div>



        </div>
    )
}

export default Head