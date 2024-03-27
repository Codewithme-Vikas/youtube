import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { GiHamburgerMenu } from "react-icons/gi";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";

import { SEARCH_SUGGESTIONS_API } from '../utlis/constant';

import { toggleMenu } from '../slices/appSlice';
import { cacheResults } from '../slices/searchSlice';

function Head() {

    const [searchKey, setSearchKey] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const dispatch = useDispatch();

    const searchCache = useSelector(store => store.search); // subscribe the cache   



    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    async function fetchSearchSuggestions(searchKey) {
        try {
            const response = await fetch(SEARCH_SUGGESTIONS_API + searchKey);
            const data = await response.json();
            setSuggestions(data[1]);

            // store search results into search cache(update cache)
            const cacheObj = { [searchKey] : data[1] }; // use [key] <-- use [] , if key is variable

            dispatch(cacheResults(cacheObj));

        } catch (error) {
            console.log(error, "fetch search suggestion function  ,inside head");
        }
    }

    // optimize api call's frequency
    useEffect(() => {

        const timer = setTimeout(() => {
            // caching
            if (searchCache[searchKey]) {
                setSuggestions(searchCache[searchKey])
            } else {
                fetchSearchSuggestions(searchKey);
            }
        }, 200); // debouncing of .2 seconds.


        return () => {
            clearTimeout(timer);
        }

    }, [searchKey]);


    return (
        <div className='flex justify-between items-center p-3 gap-10 shadow-md sticky top-0 bg-white z-10 '>

            {/* logo and humbarger */}
            <div className='flex gap-6 items-center'>

                <button onClick={toggleMenuHandler} className='p-1'>
                    <GiHamburgerMenu fontSize={20} />
                </button>

                <a href='/' className='flex items-center justify-center gap-1 font-semibold'>
                    <TbBrandYoutubeFilled fontSize={30} color='red' />
                    Youtube
                </a>

            </div>

            {/* search bar and suggestions*/}
            <div className='flex items-center gap-4 flex-auto'>

                <div className='w-full'>

                    <div className='w-full flex'>

                        <input
                            type='text'
                            placeholder='Search'
                            className='p-2 pl-6 rounded-l-full w-full border border-slate-500 outline-blue-500 
                            outline-2'
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                            onFocus={() => setShowSuggestion(true)}
                            onBlur={() => setShowSuggestion(false)} // blur means - focus out
                        />

                        <button className='border border-slate-500 p-2 pr-6  rounded-r-full'>
                            <IoSearch size={20} />
                        </button>

                    </div>

                    {
                        showSuggestion && <div className='fixed rounded-md border border-gray-100  bg-white bg py-2 w-96'>
                            <ul className='m-1'>
                                {
                                    suggestions.map((suggestion, index) => {
                                        return <li key={index} className='px-4 py-1 flex items-center gap-3 hover:bg-gray-100'>
                                            <IoSearch /> {suggestion}
                                        </li>
                                    })
                                }

                            </ul>
                        </div>
                    }
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

export default Head;