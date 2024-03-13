import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='p-10 flex flex-col gap-8'>
            <div className='text-lg font-semibold'>Error!</div>
            <p className='text-md text-red-500'>{error.status }</p>
            <p className='font-semibold'>{error.message}</p>
        </div>
    )
}

export default ErrorPage