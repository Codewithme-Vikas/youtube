import { useEffect, useState } from 'react'

import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineSend } from "react-icons/ai";

import { addMessages } from '../../slices/chatSlice';
import { randomChatAndUsernameGenerator } from '../../utlis/helper';

const LiveChat = () => {

    const chatMessages = useSelector(store => store.chat.messages);

    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();


    // message submit by user in live chat
    function messageSubmitHandler(e) {
        e.preventDefault();

        if (liveMessage === "") {
            // show notifiacation
        } else {
            dispatch(addMessages([{
                name: 'user-?',
                message: liveMessage
            }]))
            setLiveMessage("")
        }
    }


    useEffect(() => {
        // API Polling
        const interval = setInterval(() => {

            // console.log("api calling")
            const data = randomChatAndUsernameGenerator();
            dispatch(addMessages( data ));
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className='w-full shadow border border-slate-100 rounded-lg'>


            {/* scroll messages */}
            <div className='h-[450px] flex flex-col-reverse   overflow-y-scroll'>
                {
                    chatMessages.map((chat, index) => {
                        return <ChatMessage key={index} name={chat.name} message={chat.message} />
                    })
                }
            </div>





            {/* for input box */}
            <form
                onSubmit={messageSubmitHandler}
                className='flex gap-2 border-t-2 border-slate-400 p-2 pt-4 rounded'
            >
                <input
                    type='text'
                    placeholder='chat...'
                    className='w-full p-1 px-2 rounded-lg outline-none border-2 
                        border-slate-600'
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button
                    className='py-2 px-4 flex items-center gap-2 rounded-full font-semibold bg-slate-400'
                >
                    <AiOutlineSend fontSize={20} />
                </button>
            </form>
        </div>
    )
};

export default LiveChat