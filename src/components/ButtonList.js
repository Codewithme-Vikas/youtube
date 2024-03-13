import React from 'react'
import Button from './Button'

const buttonList = [
    {
        name : "All",
        link : ""
    },
    {
        name : "Medidation",
        link : ""
    },
    {
        name : "Yoga",
        link : ""
    },
    {
        name : "Live",
        link : ""
    },
    {
        name : "Cricket",
        link : ""
    },
    {
        name : "News",
        link : ""
    },
    {
        name : "Songs",
        link : ""
    },
    {
        name : "Surya Namskar",
        link : ""
    }
]

const ButtonList = () => {
  return (
    <div className='flex gap-4'>
        
        {
            buttonList.map( (button,index) =>{
                return <Button key={index} {...button}/>
            })
        }
        
    </div>
  )
}

export default ButtonList