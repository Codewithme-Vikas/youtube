import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from "../slices/videoListSlice"

const Button = ({ id, snippet }) => {

    const dispatch = useDispatch();
    const category = useSelector(store => store.video_category.category);
    
    return (
        <div>
            <button
                onClick={() => dispatch(setCategory({ tag: snippet?.title, id: id }))}
                className={'p-2 px-4 bg-slate-100 rounded-lg' +
                    (category.tag === snippet?.title ? ' bg-slate-400' : '')
                }>
                {snippet?.title}
            </button>
        </div>
    )
}

export default Button;