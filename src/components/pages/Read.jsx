import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getAllInstructors } from '../../Service/api'
import NavBar from '../semantics/NavBar'
import { Link } from 'react-router-dom'

const CapturedVal = {
   
    photo: "",
    name: "",
    Iprofile: "",
    Fprofile: "",  
}

export default function Read() {
  
  const [instructors, setInstructors] = useState(CapturedVal);
  const { photo, name, specialty, Iprofile, Fprofile } = instructors;
  const { id } = useParams();
  
  const loadInstructorData = async()=>{
      const response = await getAllInstructors (id);
      setInstructors(response.data);
  }
  
  useEffect(() => {
    loadInstructorData();
  }, []);

   return (
    <div className='bg-[#262424]'>
      <NavBar />
      {instructors.name}
        <div className ="grid md:grid-cols-3 min-h-screen sm:grid-col sm:pt-20 md:pt-32 bg-[262424]">
            <div className='sm:w-40 md:w-80 mx-auto'>
            <img className='pt-20 '  src={photo} alt="" />
            <p className='text-lg text-center text-gray-300 font-bold pt-5'>{name}</p>
            <p className='text-lg text-center text-gray-300 font-bold '>{specialty}</p>                          
            </div>  
            <div className='text-sm md:pt-20 text-gray-400 font-bold px-5'>
                <p className='text-xl bg-[#871f2d] text-center'>Instructor Profile</p>
                <p className='mb-3'>{Iprofile}</p>              
            </div>
            <div className='text-sm text-gray-400 font-bold md:pt-20 px-5'>
                <p className='text-xl bg-[#871f2d] text-center'>Fighter Profile</p>
                <p>{Fprofile}</p>
                <Link className='text-decoration-none text-red-800 font-bold' to={'/instructors'}>BACK</Link>     
            </div>                 
        </div>           
    </div> 
  )
}
