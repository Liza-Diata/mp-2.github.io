import React,  { useState, useEffect } from 'react'
import { getAllClasses, deleteClass } from '../../Service/api';
import { Link } from 'react-router-dom';
import NavBar from '../semantics/NavBar';
import Instructors from './Instructors';



const Programs = () => {

  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    getPrograms();
  }, []);

  const getPrograms = async () => {
    const response = await getAllClasses();
    console.log(response)
    setPrograms(response.data);
  
  }

  const deleteClass = async (id) =>{
    await deleteClass(id)
    //rerender the Record after deletion
    const response = await getAllClasses()
    setPrograms(response.data)
}

return (

    <div>
      <NavBar />
        <div className='w-full px-4 bg-[#262424]  text-gray-300 '>
          <h1 className='text-center pt-32 font-bold text-4xl'>PROGRAMS</h1> 
          <p className='text-center pt-2 px-4 text-xl font-semibold' >TAKE YOUR TRAINING TO THE NEXT LEVEL WITH THE BEST MMA GYM IN THE WORLD!
            Our mission is to transform you into greatness through authentic martial arts.      </p> 
            <div className='max-w-[1240px] mx-auto px-5 gap-8'>  
             {programs.map((data) =>( 
                <div className='grid md:grid-cols-2 w-full pt-20 px-20 my-4'>            
                    <img className='w-72 h-52 px-30 sm:px-2' src={data.photo} alt="" />   
                    <div className='mx-auto md:px-5 sm:px-2'>
                        <h3 className='text-2xl font-bold text-center justify-evenly'> {data.name}</h3>
                        <p className='text-center text-md pt-2 '>{data.description1}</p>  
                    </div>
                </div>   
                ))
            }
            </div>
            <Instructors />
        </div>
   
    </div>   
)
}
export default Programs