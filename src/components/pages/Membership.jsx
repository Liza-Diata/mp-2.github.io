import React,  { useState, useEffect } from 'react'
import { getAllBasic, deleteBasic } from '../../Service/api'
import NavBar from '../semantics/NavBar'
import Programs from './Programs'
import './home.css'

const Membership = () => {

  const [basicPlan, setbasicPlan] = useState([]);

  useEffect(() => {
    getBasic();
  }, []);

  const getBasic = async () => {
    const response = await getAllBasic();
    console.log(response)
    setbasicPlan(response.data);
    console.log(basicPlan)
  }

  const deleteBasicId = async (id) =>{
    await deleteBasic(id)
    //rerender the Record after deletion
    const response = await getAllBasic()
    setbasicPlan(response.data)
}
 
return (
  <div className='w-full bg-[#262424] mt-32 mx-0 '>
    <NavBar />   
     <h1 className='text-center text-gray-300 font-bold text-4xl'>MEMBERSHIP PLAN</h1>     
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 sm:p-32  md:px-52 gap-8 md:mt-10'>  
        {basicPlan.map((data) =>( 
        <div className='w-full shadow-md shadow-gray-50 flex flex-col px-4 my-5 rounded-lg hover:scale-105 duration-300 bg-gray-200 sm:col-span-3 md:col-span-2 sm:ml'>          
            <img className='w-40 mx-auto pt-3' src="https://i0.wp.com/www.fightbookmma.com/wp-content/uploads/2022/07/fight-scout-logo.png?fit=1670%2C657&ssl=1" alt="" />
            <h3 className='text-xl font-bold text-center pt-3 pb-3  text-[#871f2d]'> {data.name}</h3>
            <p className='text-center  text-[#871f2d] text-md font-bold'>Monthly:  {data.monthly}</p>
            <p className='text-center  text-[#871f2d] text-md font-bold'>Quarterly:  {data.quarterly}</p>
            <p className='text-center  text-[#871f2d] text-md font-bold'>Half-Yearly:  {data.halfyearly}</p>
            <p className='text-center  text-[#871f2d] text-md font-bold'>Annual:  {data.yearly}</p>
            <div className='text-center text-[#871f2d]  font-medium'>
            <p className='py-2 border-b mx-8 mt-4'>{data.inclusion}</p>
            </div>          
          </div>     
          ))
        }
          <button className='bg-[#871f2d] w-[300px] mx-auto rounded-md font-medium my-4 col-span-4  py-2 hover:scale-105 duration-300'>Start 1 Week Free Trial</button>
       </div>      
        <Programs />
        </div>
       
      

     
  )
}

export default Membership