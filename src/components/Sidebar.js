import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if (!isMenuOpen) return null;


    return (
        <div className='p-5 shadow-lg w-48'>

            <div className='border-b-2'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        </li>
                    <li>Shorts</li>
                    <li>Subscriptions</li>
                </ul>
            </div>




            <div className='border-b-2'>
                <h1 className='font-semibold'>Subscription</h1>

                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>


            <div className='border-b-2'>
                <h1 className='font-semibold'>Explore</h1>

                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>

            <div className='border-b-2'>
                <h1 className='font-semibold'>More from YouTube</h1>

                <ul>
                    <li>YouTube Premium</li>
                    <li>YouTube Studio</li>
                    <li>YouTube Music</li>
                    <li>YouTube Kids</li>
                </ul>

            </div>

            <div className='border-b-2'>
                <ul>
                    <li>Setting</li>
                    <li>Report history</li>
                    <li>Help</li>
                    <li>Send feedback</li>
                </ul>
            </div>

            <p className='text-sm'> copy; 2024 Google LLC</p>
        </div>
    )
}

export default Sidebar