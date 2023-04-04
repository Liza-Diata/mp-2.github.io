import React, { useState } from 'react'
import NavBar from '../semantics/NavBar'
import './home.css'
import About from './About';

const Home = () => {
  
    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false)

    const clicked = () => {
      setModalOn(true)
    }
  return (
    <div className=' bg-[#262424] text-white '> 
    <NavBar />   
    <div className='max-w-[1000px] mt-[-96px] w-full mx-auto grid md:grid-cols-3 pt-52 gap-3 md:px-52 h-screen sm:px-4'>       
        <img src="https://64.media.tumblr.com/43fbdd645f9a657218b0f4be46f35b79/tumblr_ne2kvzBph61ry1rm7o2_250.gif" className='w-[800px] mx-auto my-4 h-72 rounded-lg shadow-xl hover:scale-105 duration-300' />
        <img src="https://media.tenor.com/_V74GCAT2SIAAAAC/women-training.gif" className='w-[800px] mx-auto my-4 h-72 rounded-lg shadow-xl hover:scale-105 duration-300' alt="" />
        <img src="https://media0.giphy.com/media/KbZZbtt7fj5f8mUwAY/200w.gif?cid=6c09b952wnvp2agaevv02vbivp2rwvd6hk94lvxu21jxim6c&rid=200w.gif&ct=g" className='w-[800px] mx-auto my-4 h-72 rounded-lg shadow-xl hover:scale-105 duration-300' alt="" />
        <p className='text-white sm:text-xl md:text-3xl font-bold col-span-3 mx-auto p-2]'>Train With Us</p>
        <h3 className='md:text-7xl sm:text-l lg:text-4xl font-bold md:py-3 col-span-3 text-center'>Welcome to the FIGHT SCOUT GYM!</h3>
        <p className='md:text-xl text-xl font-bold text-gray-500 text-center col-span-3'>We pride ourselves on providing a supportive and inclusive environment where students can develop their skills, build their fitness, and form lasting friendships.</p>
        <button className='bg-[#871f2d] w-[100px] h-12 rounded-md font-sm  mx-auto col-span-3'   >Join Today</button>   
    </div>
        <About />
    </div>
   
  )
}

export default Home