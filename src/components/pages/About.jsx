import React from 'react'
import NavBar from '../semantics/NavBar'
import Newsletter from './Newsletter'


const About = () => {
  return (
    <div>
    <div className='w-full  bg-[#262424] text-white pt-20 mt-10 sm:px-4 md:px-20 '>
    <NavBar />
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-5'>
        <img className='w-[600px] h-96 mx-auto my-4' src="https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?cs=srgb&dl=pexels-pixabay-260447.jpg&fm=jpg" alt="" />
        <div className='flex flex-col text-justify pr-5'>
          <p className='text-white font-bold text-xl'>FIGHT SCOUT has been home to many championship fighters from around the world.</p>
          <p className=' text-md py-2 text-gray-300 font-semibold'>Today, we have over 15 hours of classes per day and over 20 trainers and coaches. No trainer has less than 20 years of experience, and every one of them has competed on a professional level. It is a priority to us that you’re being taught by experts. FIGHT SCOUT takes pride in our coaching staff and credits them for our continued success in all of our programs.</p>
          <p className=' text-md py-2  text-gray-300'>FIGHT SCOUT offers a variety of classes, such as Brazilian Jiu-Jitsu, Muay Thai Kickboxing, Boxing, MMA and Cardio Kickboxing. The majority of our classes are beginner friendly and our staff will makes everyone feel at home.  Whether your goals are to get in shape, learn martial arts or become a top level MMA fighter, we can help you achieve your goals and see results.</p>
          <button className='bg-[#871f2d] w-[200px] rounded-md font-medium  mx-auto my-4 py-2 col-span-3'>GET STARTED</button>
        </div>
      </div>
      </div>
      <Newsletter/>
      </div>
  )
}

export default About