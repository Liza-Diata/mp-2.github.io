import React, { useState, useEffect} from 'react'
import NavBar from '../semantics/NavBar'
import { Link } from 'react-router-dom'
import { getAllInstructors, deleteInstructor } from '../../Service/api'


const Instructors = () => {

  const [instructor, setInstructors] = useState([]);

    useEffect(() => {
        getInstructor();
    }, []);

    const getInstructor = async () =>{
        const response = await getAllInstructors();
        console.log(response);
        setInstructors(response.data);
        console.log(instructor)
    }

    const  deleteInstructorId = async (id) =>{
        await deleteInstructor(id)
        //rerender the Record after deletion
        const response = await getAllInstructors()
        setInstructors(response.data)
   }
  return (

    <div className='w-full py-[10rem] px-4 bg-[#262424] '>
    <NavBar/>
    <h1 className='text-center font-bold text-4xl pb-20 text-gray-200'>MEET OUR WORLD CHAMPION INSTRUCTORS</h1>  
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 px-5 gap-8 grid-cols-2'>  
       {instructor.map((data) =>( 
       <div className='w-full bg-slate-200 shadow-md shadow-gray-300 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>          
           <img className='w-40 h-60 mx-auto ' src={data.photo} alt="" />
           <h3 className='md:text-xl sm:text-base font-bold text-center py-2 text-black '>{data.name}</h3>
           <h5 className='md:text-lg sm:text-sm text-black text-center '>{data.specialty}</h5>
           <Link className='text-center text-sm text-decoration-none text-red-800 font-semibold' to={`/view/${data.id}`}>View</Link>
        </div>          
        ))
       }
     </div>
    </div>   
   )
 }
 export default Instructors
         
      


