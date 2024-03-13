import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const Maincontainer = () => {
  return (
    <div className='p-2 flex flex-col gap-4'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default Maincontainer