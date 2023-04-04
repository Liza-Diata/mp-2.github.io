import React from 'react'
import Membership from './Membership'
import './home.css'

const Newsletter = () => {
  return (
    <div className='w-full pt-10 text-gray mt-10  bg-[#262424]'>
        <div className='px-10 mx-auto grid lg:grid-cols-3  bg-[#871f2d]'>
            <div className='md:col-span-2 my-4 '>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2  text-gray-300'>Want Updates about our Promos and Events?</h1>              
                <p>Sign up to our newsletter and stay up to date</p>                
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder="Enter Email" />
                     <button className='bg-gray-500 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
                <p>We care bout the protection of your data. Read our <span className='text-[@00df9a]  text-gray-300'>Read our </span>Privacy Policy</p> 
            </div>
        </div>
        <Membership />
    </div>
  )
}

export default Newsletter