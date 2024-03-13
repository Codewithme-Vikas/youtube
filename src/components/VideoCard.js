import React from 'react'

import { numberFormatter, timeDifference } from '../utlis/timeDifference';


const VideoCard = ({ id, statistics, snippet }) => {

    const { publishedAt, channelId, title, description, channelTitle, tags, thumbnails } = snippet;
    const { viewCount, likeCount, favoriteCount, commentCount } = statistics;

    const publishedTime = timeDifference( publishedAt );
    const views = numberFormatter( viewCount );

    return (
        <div className='flex w-full group flex-col gap-2'>

            <div className=''>
                <img
                    src={thumbnails?.default?.url}
                    // width={thumbnails?.default?.width * 2}
                    // height={thumbnails?.default?.height}
                    className='w-full aspect-video object-cover rounded-2xl group-hover:rounded-none  
                        duration-500 group-hover:shadow-lg group-hover:shadow-slate-100 
                        transition-all group-hover:scale-[1.01]'
                />
            </div>

            <div className='flex gap-2 p-1'>

                <div>
                    <img src='' alt='Acc    ount profile' />
                </div>

                <div className=''>
                    <p className='text-md font-semibold'>{title}</p>
                    <p>{channelTitle}</p>
                    <p>{ views }  . {publishedTime}</p>
                </div>
            </div>

        </div>
    )
}

export default VideoCard;