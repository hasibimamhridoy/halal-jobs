import React, { useState } from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Lottie from "lottie-react";
import ErrorLottie from "./98488-bot-error-404.json";


const ErrorPage = () => {
  const { error, status } = useRouteError()

  const [isStatus,setIsStatus] = useState(false)

  return (
    <section className='flex items-center h-screen p-14 bg-gray-100 text-gray-900'>
        
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {<Lottie animationData={ErrorLottie} loop={true} /> || status}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-blue-400 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage