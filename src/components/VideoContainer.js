import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'

import { YOUTUBE_VIDEOS_URL,YOUTUBE_CATEGORY_VIDEOS } from "../utlis/constant";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos, clearVideo } from '../slices/videoListSlice';

const VideoContainer = () => {

    const { category, videos} = useSelector( store=> store.video_category );
    const dispatch = useDispatch();

    const [nextPageToken, setNextPageToken] = useState(null); // useful to next call API


    async function fetchVideos(categoryId) {
        try {
            // category id = 0 means --> 'All'
            let APIUrl = categoryId === '0' || categoryId === undefined ? YOUTUBE_VIDEOS_URL : YOUTUBE_CATEGORY_VIDEOS + categoryId;
            APIUrl = nextPageToken ? APIUrl +  "&pageToken=" + nextPageToken : APIUrl;
            
            // console.log( "api url is " , APIUrl );
            

            const response = await fetch(APIUrl);
            const data = await response.json();
           
            dispatch( addVideos(data?.items) );

            setNextPageToken(data?.nextPageToken);

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        dispatch( clearVideo() );
        fetchVideos(category.id);
    }, [category,dispatch]);


    useEffect(() => {

        let isFetching = false; // help in debouncing
        function handleScroll() {
            /*
               //document.documentElement refers to the <html> 
               //window.innerHeight - indicates how much of the content area is currently visible in the browser window.
               //document.documentElement.scrollTop - This retrieves the number of pixels that the document has already been scrolled vertically from the top.
               //document.documentElement.offsetHeight: This retrieves the height of the entire document.
           */
            // console.log(window.innerHeight, document.documentElement.scrollTop, window.innerHeight + document.documentElement.scrollTop, document.documentElement.offsetHeight)
            if (!isFetching &&
                (window.innerHeight + document.documentElement.scrollTop + 30) > document.documentElement.offsetHeight  // +30 is bottom threshold
            ) {
                // user has scrolled to the bottom
                isFetching = true;
                fetchVideos().then(() => {
                    isFetching = false
                });

            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [nextPageToken]); // Trigger fetchVideos whenever nextPageToken changes -{ deep thing <-- clousre working} || as nextPageToken change , we want the callback function fetchvideo must also change (take new copy of nextPageToken )

    return videos.length === 0 ? <Shimmer /> : (
        <div className='flex justify-between gap-x-4 gap-y-6 flex-wrap'>

            {
                videos.map(video => {
                    return <Link to={`/watch?v=${video?.id}`} key={video?.id} className='w-[32%]'>
                        <VideoCard key={video?.id} {...video} />
                    </Link>
                })
            }
        </div>
    )
}

export default VideoContainer;