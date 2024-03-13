import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_COMMENTS } from '../utlis/constant';

import Shimmer from "./Shimmer"
import CommentCard from './CommentCard';

const Comments = ({ videoId }) => {

    const [comments, setComments] = useState([]);

    async function getComments(videoId) {
        try {
            const response = await fetch(YOUTUBE_VIDEO_COMMENTS + videoId);
            const data = await response.json();
            setComments(data.items);
        } catch (error) {
            console.log(error, "inside comment component , getComments function");
        }
    }

    useEffect(() => {
        getComments(videoId);
    }, []);

    return comments.length === 0 ? <Shimmer /> : (
        <div className=''>

            {/* comments and sort by */}
            <div>
                <p className='text-xl font-semibold mb-2'>20,032 Comments</p>
            </div>

            {/* write a comment */}
            {/* <div>
                <img src='' alt='img' />

                <div className='border-b border-slate-400'>
                    <input
                        placeholder='Add a comment...'
                        className='py-1'
                    />
                </div>

                <button className='py-2 px-4 rounded-full'>Comment</button>
            </div> */}


            {/* comments */}
            <div className='p-1 flex flex-col gap-4'>
                {comments.map(comment => {
                    return <CommentCard key={comment.id}
                        profileWidth={50}
                        authorDisplayName={comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                        authorProfileImageUrl={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                        publishedAt={comment?.snippet?.topLevelComment?.snippet?.publishedAt}
                        textOriginal={comment?.snippet?.topLevelComment?.snippet?.textOriginal}
                        textDisplay={comment?.snippet?.topLevelComment?.snippet?.textDisplay}
                        likeCount={comment?.snippet?.topLevelComment?.snippet?.likeCount}
                        replies={comment?.replies}

                    />
                })}

            </div>

        </div>
    )
}

export default Comments