import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import SuggestionBarVideoCard from "./SuggestionBarVideoCard"

import { YOUTUBE_CATEGORY_VIDEOS } from '../utlis/constant';
import Shimmer from './Shimmer';

const SuggestionBar = ({ categoryId }) => {
    const [suggestionVideos, setSuggestionVideos] = useState([]);


    async function fetchVideos(categoryId) {
        try {
            const response = await fetch(YOUTUBE_CATEGORY_VIDEOS + categoryId);
            const data = await response.json();

            setSuggestionVideos(data?.items);
        } catch (error) {
            console.log(error,"suggestionBar component fetchVideos functions")
        }
    }

    //To Do -  improve this 
    useEffect(() => {
        fetchVideos(categoryId)
    }, [categoryId]);

    return !suggestionVideos ? <Shimmer /> : (
        <div className='flex flex-col gap-2'>
            {
                suggestionVideos.map(video => {
                    return <Link to={`/watch?v=${video?.id}`} key={video?.id}>
                        <SuggestionBarVideoCard key={video?.id} {...video} />
                    </Link>
                })
            }
        </div>
    )
}

export default SuggestionBar