import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { PiFilmSlateBold } from "react-icons/pi";
import { MdOnlinePrediction } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { GiNewspaper } from "react-icons/gi";
import { GrTrophy } from "react-icons/gr";
import { MdOutlineLightbulb } from "react-icons/md";
import { GiHanger } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";

import { FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { RiFeedbackLine } from "react-icons/ri";

const exploreLinks = [
    {
        id: 1,
        name: "Trending",
        link: "/",
        icon: FaArrowTrendUp
    },
    {
        id: 2,
        name: "Shopping",
        link: "/",
        icon: MdOutlineShoppingBag
    },
    {
        id: 3,
        name: "Music",
        link: "/",
        icon: CgMusicNote
    },
    {
        id: 4,
        name: "Film",
        link: "/",
        icon: PiFilmSlateBold
    },
    {
        id: 5,
        name: "Live",
        link: "/",
        icon: MdOnlinePrediction
    },
    {
        id: 6,
        name: "Gameing",
        link: "/",
        icon: SiYoutubegaming
    },
    {
        id: 7,
        name: "News",
        link: "/",
        icon: GiNewspaper
    },
    {
        id: 8,
        name: "Sport",
        link: "/",
        icon: GrTrophy
    },
    {
        id: 9,
        name: "Courses",
        link: "/",
        icon: MdOutlineLightbulb
    },
    {
        id: 10,
        name: "Fashion & beauty",
        link: "/",
        icon: GiHanger
    },
    {
        id: 11,
        name: "Podcasts",
        link: "/",
        icon: MdOutlinePodcasts
    }
]

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if (!isMenuOpen) return null;


    return (
        <div className='py-2 shadow-lg max-h-screen overflow-y-scroll'>

            {/* main links - home, shorts , Subscriptions */}
            <div className='px-5 border-b-2 py-2'>
                <ul>
                    <Link className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                        <GoHome fontSize={20} />
                        <p to="/">Home</p>
                    </Link>

                    <Link className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                        <SiYoutubeshorts fontSize={20} />
                        <p>Shorts</p>
                    </Link>

                    <Link className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                        <MdOutlineSubscriptions fontSize={20} />
                        <p>Subscriptions</p>
                    </Link>
                </ul>
            </div>



            {/* explore links */}
            <div className='px-5 border-b-2 py-2'>
                <h1 className='font-semibold py-1'>Explore</h1>

                <ul>
                    {exploreLinks.map(link => {
                        return <Link key={link.id} className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                            {link.icon && React.createElement(link.icon, { style: { fontSize: 20 } })}
                            <p>{link.name}</p>
                        </Link>
                    })}
                </ul>
            </div>

            {/* more from youtube */}
            <div className='px-5 py-2 border-b-2'>
                <h1 className='font-semibold'>More from YouTube</h1>

                <ul>
                    <Link className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                        <FaYoutube fontSize={20} color='red' />
                        <p to="/">YoutTube Premium</p>
                    </Link>

                    <Link className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                        <SiYoutubemusic fontSize={20} color='red' />
                        <p to="/">YoutTube Music</p>
                    </Link>

                    <Link className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                        <TbBrandYoutubeKids fontSize={20} color='red' />
                        <p to="/">YoutTube Kids</p>
                    </Link>


                </ul>

            </div>

            {/* other links - setting, report ,help , feedback */}
            <div className='px-5 border-b-2 py-2'>

                <ul>
                    <Link className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                        <IoSettingsOutline fontSize={20} />
                        <p to="/">Setting</p>
                    </Link>

                    <Link className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                        <MdOutlineFlag fontSize={20} />
                        <p to="/">Report history</p>
                    </Link>

                    <Link className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                        <BsQuestionCircle fontSize={20} />
                        <p to="/">Help</p>
                    </Link>

                    <Link className='flex gap-6 items-center py-2 px-4 hover:bg-slate-200 rounded-lg'>
                        <RiFeedbackLine fontSize={20} />
                        <p to="/">Send feedback</p>
                    </Link>
                </ul>
            </div>


            <p className='text-sm text-center py-4'> &copy; 2024 Google LLC</p>
        </div>
    )
}

export default Sidebar