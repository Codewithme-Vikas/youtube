import React, { useEffect, useState } from 'react'
import Button from './Button'
import { YOUTUBE_CATEGORYIES } from '../utlis/constant';
import { useDispatch } from 'react-redux';



const ButtonList = () => {
    const [videoCategories, setVideoCategories] = useState(['All']);
    const dispatch = useDispatch();

    async function fetchCategories() {
        try {
            const response = await fetch(YOUTUBE_CATEGORYIES);
            const data = await response.json();

            // 'all' named category addition <-- manually
            const all = { id: 0, snippet: { title: 'All' } };

            setVideoCategories([all, ...data?.items]);
        } catch (error) {
            console.log(error, "error in button list componet , fetchCategories function")
        }
    }

    
    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className='flex gap-x-4 gap-y-2 flex-wrap'>



            {
                videoCategories.map((category) => {
                    return <Button key={category.id} {...category} />
                })
            }

        </div>
    )
}

export default ButtonList