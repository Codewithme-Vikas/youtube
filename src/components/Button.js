import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='p-2 px-4 bg-slate-100 rounded-lg'>
            {name}
        </button>
    </div>
  )
}

export default Button