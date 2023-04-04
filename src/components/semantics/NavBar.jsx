import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import './Nav.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [nav, setnav] = useState(true)
    
    const handleNav = () => {
      setnav(!nav)
    }
 

  return (
    <div className='w-full flex justify-between items-center h-20 top-0 max-w-[1240px] mx-auto px-4 right-0 text-gray-200 bg-black fixed'>
        <img src="https://i0.wp.com/www.fightbookmma.com/wp-content/uploads/2022/07/fight-scout-logo.png?fit=1670%2C657&ssl=1" className='w-28 ml-20 ' alt="" />
        <ul className='hidden md:flex mx-auto' id='navlink '>
            <Link className='mt-4 mx-2 p-2 font-bold hover:scale-105 duration-300 cursor-pointer hover:bg-[#871f2d] rounded-xl' id='navlink' to='/'>HOME</Link>
            <Link className='mt-4 mx-2 p-2  font-bold hover:scale-105 duration-300 cursor-pointer hover:bg-[#871f2d] rounded-xl' id='navlink' to='/about'>ABOUT</Link>
            <Link className='mt-4 mx-2 p-2  font-bold hover:scale-105 duration-300 cursor-pointer hover:bg-[#871f2d] rounded-xl' id='navlink' to='/allbasic'>MEMBERSHIP</Link>
            <Link className='mt-4 mx-2 p-2  font-bold hover:scale-105 duration-300 cursor-pointer hover:bg-[#871f2d] rounded-xl' id='navlink' to='/training'>PROGRAMS</Link>
            <Link className='mt-4 mx-2 p-2  font-bold hover:scale-105 duration-300 cursor-pointer hover:bg-[#871f2d] rounded-xl' id='navlink' to='/instructors'>INSTRUCTORS</Link>
            <Link className='mt-4 mx-2 p-2  font-bold hover:scale-105 duration-300 cursor-pointer hover:bg-[#871f2d] rounded-xl' id='navlink' to='/admin'>ADMIN</Link>
        </ul> 
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>  }
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
       <img src="https://i0.wp.com/www.fightbookmma.com/wp-content/uploads/2022/07/fight-scout-logo.png?fit=1670%2C657&ssl=1" className='w-32 m-5' alt="..." />
          <ul className='pt-24 uppercase m-4 p-4 flex flex-col'>
            <Link className='p-4 border-b border-gray-600 text-decoration-none font-bold text-[#871f2d] hover:bg-[#871f2d] hover:text-white duration-300' to='/'>HOME</Link>
            <Link className='p-4 border-b border-gray-600 text-decoration-none font-bold text-[#871f2d] hover:bg-[#871f2d] hover:text-white duration-300' to='about'>ABOUT</Link>
            <Link className='p-4 border-b border-gray-600 text-decoration-none font-bold text-[#871f2d] hover:bg-[#871f2d] hover:text-white duration-300' to='table'>MEMBERSHIP</Link>
            <Link className='p-4 border-b border-gray-600 text-decoration-none font-bold text-[#871f2d] hover:bg-[#871f2d] hover:text-white duration-300' to='table'>PROGRAMS</Link>
            <Link className='p-4 border-b border-gray-600 text-decoration-none font-bold text-[#871f2d] hover:bg-[#871f2d] hover:text-white duration-300' to='instructors'>INSTRUCTORS</Link>
            <Link className='p-4 border-b border-gray-600 text-decoration-none font-bold text-[#871f2d] hover:bg-[#871f2d] hover:text-white duration-300' to='admin'>ADMIN</Link>
          </ul>
        </div>        
    </div>
  )
}



export default NavBar
