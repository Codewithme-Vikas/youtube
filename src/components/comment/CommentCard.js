import { useState } from "react";

import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { numberFormatter, timeDifference } from '../../utlis/helper';

const CommentCard = ({ profileWidth, authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay, likeCount, replies }) => {

    // textOriginal,

    const [isShow, setIsShow] = useState(false);

    return (
        <div className="flex gap-2">

            {/* user-profile img */}
            <div className="w-1/12">
                <img
                    src={authorProfileImageUrl}
                    alt='img'
                    className='rounded-full'
                    width={profileWidth}
                />
            </div>


            <div className="w-11/12 flex flex-col gap-1">

                <div className="flex gap-2 items-center">
                    <p className="font-medium">{authorDisplayName}</p>
                    <p className="text-sm font-light">{timeDifference(publishedAt)}</p>
                </div>


                <div>
                    {/* Render textOriginal as HTML using dangerouslySetInnerHTML */}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: isShow ? textDisplay : textDisplay.substring(0, 200)
                        }}
                    >
                    </div>

                    {textDisplay.length > 200 && <button
                        className='hover:underline text-sm'
                        onClick={() => setIsShow(!isShow)}
                    >
                        {isShow ? "show less" : "...Read more"}
                    </button>}

                </div>


                <div className='flex gap-2'>

                    <button className='flex items-center gap-1 text-sm'>
                        <AiOutlineLike fontSize={20} />
                        {numberFormatter(likeCount)}
                    </button>

                    <button>
                        <AiOutlineDislike fontSize={20} />
                    </button>

                    <button className='text-sm ml-4'>Reply</button>
                </div>


                {/* replies */}
                <div className="p-1 pt-2">
                    {
                        replies?.comments.length > 0 && replies?.comments.map(comment => {
                            return <CommentCard key={comment.id}
                                profileWidth={40}
                                authorDisplayName={comment?.snippet?.authorDisplayName}
                                authorProfileImageUrl={comment?.snippet?.authorProfileImageUrl}
                                publishedAt={comment?.snippet?.publishedAt}
                                textOriginal={comment?.snippet?.textOriginal}
                                textDisplay={comment?.snippet?.textOriginal}
                                likeCount={comment?.snippet?.likeCount}
                            />
                        })
                    }
                </div>


            </div>
        </div>
    )
};

export default CommentCard;