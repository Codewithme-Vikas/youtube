import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'

import { YOUTUBE_VIDEOS_URL } from "../utlis/constant";
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);


    async function fetchVideos() {
        try {
            const response = await fetch(YOUTUBE_VIDEOS_URL);
            const data = await response.json();
            setVideos(data.items)
            // console.log(data.items)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchVideos();
    }, []);

    return videos.length === 0 ? <Shimmer /> : (
        <div className='flex gap-x-4 gap-y-6 flex-wrap'>

            {
                videos.map(video => {
                    return <Link to={`/watch?v=${video?.id}`} key={video?.id} className='w-[30%]'>
                        <VideoCard key={video?.id} {...video} />
                    </Link>
                })
            }
        </div>
    )
}

export default VideoContainer;