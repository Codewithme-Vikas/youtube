import React from 'react'

import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex gap-2 items-center p-2 hover:bg-slate-100 hover:rounded'>

        
        <div>
            <FaUserCircle fontSize={20}/>
        </div>
        
        <div className='flex gap-4'>
            <p className='font-semibold text-md'>{name}</p>
            <p>{message}</p>
        </div>

        
    </div>
  )
}

export default ChatMessage;