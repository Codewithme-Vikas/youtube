import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

import { closeMenu } from '../slices/appSlice';

import Comments from "./comment/Comments";
import LiveChat from './live/LiveChat';
import SuggestionBar from "./SuggestionBar";

import { YOUTUBE_CHANNEL_DATA, YOUTUBE_VIDEO_DATA } from '../utlis/constant';
import { numberFormatter, timeDifference } from '../utlis/helper';

import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { clearChat } from '../slices/chatSlice';

const WatchPage = () => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const [videoData, setVideoData] = useState(null);
    const [channelData, setChannelData] = useState(null);

    const [isShowDescription, setShowDescription] = useState(false);

    const id = searchParams.get("v");

    const publishedTime = timeDifference(videoData?.snippet?.publishedAt);
    const views = numberFormatter(videoData?.statistics?.viewCount);
    const subscriber = numberFormatter(channelData?.statistics?.subscriberCount);
    const likes = numberFormatter(videoData?.statistics?.likeCount);
    // const comments = numberFormatter(videoData?.statistics?.commentCount);

    // categoryId <-- to fetch suggestion videos( similar videos )
    const categoryId = videoData?.snippet?.categoryId;

    async function getVideoData(id) {
        try {

            const response = await fetch(YOUTUBE_VIDEO_DATA + id)
            const data = await response.json();
            setVideoData(data?.items?.[0])
        } catch (error) {
            console.log(error, "inside watchPage getvideoData function")
        }
    }

    async function getChannelData(id) {
        try {
            const response = await fetch(YOUTUBE_CHANNEL_DATA + id);
            const data = await response.json();
            setChannelData(data?.items?.[0])

        } catch (error) {
            console.log(error, "inside watch page , get channel data");
        }
    }

    useEffect(() => {

        dispatch(closeMenu());

        getVideoData(id);

        return () => {
            // as soon as page will be changed , the chat should be deleted!
            dispatch(clearChat());
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (videoData) {
            getChannelData(videoData?.snippet?.channelId);
        }
    }, [videoData])

    return (
        <div className='w-11/12 mx-auto my-4'>
            <div className='flex gap-4'>

                {/* video deatil and comment section/component */}
                <div className='flex w-2/3  group flex-col gap-4'>

                    {/* iframe */}
                    <div className=''>
                        <iframe
                            width="800"
                            src={"https://www.youtube.com/embed/" + id + "?si=4OWbDfnA4vwJVXTc"}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className='aspect-video rounded-2xl'
                        >
                        </iframe>
                    </div>

                    {/* channel and video detail */}
                    <div className='flex flex-col gap-4'>

                        {/* video title */}
                        <div>
                            <p className='text-lg font-semibold'>{videoData?.snippet?.title}</p>
                        </div>

                        {/* account profile , channel name, join & subscribe and like/dislike buttons */}
                        <div className='flex gap-2 justify-between items-start'>

                            <div className='flex gap-4'>

                                <div>
                                    <img src={channelData?.snippet?.thumbnails?.default?.url}
                                        width={50}
                                        alt='Img'
                                        className='rounded-full'
                                    />
                                </div>

                                <div>
                                    <p className='text-md font-semibold'>{videoData?.snippet?.channelTitle}</p>
                                    <p className='text-sm font-medium'>{subscriber + "subscribers"}</p>
                                </div>

                                {/* // without items-* , buttons will take all space */}
                                <div className='flex gap-2 items-start'>
                                    <button className='py-2 px-4 rounded-full font-semibold bg-slate-400'>Join</button>
                                    <button className='py-2 px-4 rounded-full font-semibold bg-slate-400'>Subscribe</button>
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                {/* like / dislike buttons */}
                                <div className='flex '>
                                    <button className='py-2 px-4 flex items-center gap-2 rounded-l-full font-semibold bg-slate-400'>
                                        <AiOutlineLike fontSize={20} />
                                        <span>{likes}</span>
                                    </button>

                                    <button className='py-2 px-4 rounded-r-full border-l border-l-slate-900 font-semibold bg-slate-400'>
                                        <AiOutlineDislike fontSize={20} />
                                    </button>
                                </div>

                                {/* share */}
                                <div>
                                    <button className='py-2 px-4 flex items-center gap-2  rounded-full font-semibold bg-slate-400'>
                                        <PiShareFatBold fontSize={20} />{"share"}
                                    </button>
                                </div>

                                {/* options */}
                                <div className=''>
                                    <button className='p-3 rounded-full font-semibold bg-slate-400'>
                                        <BsThreeDots />
                                    </button>
                                </div>
                            </div>
                        </div>


                        {/* description */}
                        <div className='p-3 shadow-lg border border-slate-400 shadow-black rounded-lg'>
                            <p>{views + "views"}  | {publishedTime}</p>

                            {/* <p>{videoData?.snippet?.description}</p> */}
                            <p dangerouslySetInnerHTML={{
                                __html: isShowDescription ? videoData?.snippet?.description.replace(/\n/g, '<br>')
                                    : videoData?.snippet?.description.substring(0, 100).replace(/\n/g, '<br>') + "..."
                            }}
                            >
                            </p>

                            {videoData?.snippet?.description.length > 100 && (
                                <button
                                    className='hover:underline text-sm'
                                    onClick={() => setShowDescription(!isShowDescription)}
                                >
                                    {isShowDescription ? "show less" : "...more"}
                                </button>
                            )}

                        </div>

                    </div>


                    <Comments videoId={id} />

                </div>


                {
                    videoData && <div className='w-full'>
                        <LiveChat />
                        <SuggestionBar categoryId={categoryId} />
                    </div>
                }


            </div>


        </div>
    )
}

export default WatchPage