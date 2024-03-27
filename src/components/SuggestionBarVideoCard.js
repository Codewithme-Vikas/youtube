import React from 'react'

import { numberFormatter, timeDifference } from '../utlis/helper';


const SuggestionBarVideoCard = ({ id, statistics, snippet }) => {

    const { publishedAt, title, channelTitle, thumbnails } = snippet;
    const { viewCount, } = statistics;

    const publishedTime = timeDifference(publishedAt);
    const views = numberFormatter(viewCount);

    return (
        <div className='flex h-32 group gap-2 '>

            <div className='flex flex-[50%]'>
                <img
                    src={thumbnails?.default?.url}
                    className='w-full  aspect-video object-cover rounded-xl'
                />
            </div>

            <div className='flex flex-[50%] flex-col gap-1 p-1'>

                <p className='text-sm font-medium leading-tight'>{ title.length < 70 ?  title : title.substring(0, 70) + "..."}</p>

                <div className='flex flex-col'>
                    <p className='text-xs font-medium text-slate-800'>{channelTitle}</p>
                    <p className='text-xs font-medium text-slate-800'>{views}  . {publishedTime}</p>
                </div>

            </div>

        </div>
    )
}

export default SuggestionBarVideoCard;