import React, { useState, useEffect } from 'react'
import { getAllInstructors, editInstructor, getprogram } from '../../Service/api'
import { useNavigate, useParams } from 'react-router-dom';



const CapturedVal = {
  photo: "",
  name: "",
  specialty: "",
  Iprofile: "",
  Fprofile: "",  
}

export default function EditInstructor() {

  //set captured value from client 
  const [instructors, setInstructors] = useState(CapturedVal);
  const { photo, name, specialty, Iprofile, Fprofile} = instructors;
  const {id} = useParams();
    //get  user
const getInstructors = async ()=>{
  const response = await getAllInstructors(id)
  setInstructors(response.data)
  
}
 //function captured value from client 
   const onValueChange =(e)=>{
    setInstructors({...instructors, [e.target.name]: e.target.value});
     console.log(instructors)
}
   // useNavigate to redirect to specific route
 let redirect = useNavigate();
 
 //edit user by id
 const editInstructorDetails = async()=>{
  await editInstructor(id, instructors)
  redirect('/instructorData')
 }

 useEffect(() =>{
    getInstructors();
}, []);

  
   return (
     <div className="container mt-20 mb-32">
     <h3 className='mb-10 text-black font-bold text-center'>Edit Instructor Details</h3>
        <div className="bg-gray-200 pt-10 mx-60 rounded-3xl">
                 <form>  
                    <div className="mb-2 ">
                        <p className='text-center font-semibold text-xl'>Photo URL:</p>
                        <textarea className='ml-24 px-10  h-20 w-[70%] bg-white rounded-lg' 
                         type="text" 
                         placeholder="Photo Url"
                         onChange={(e)=> onValueChange(e)} 
                         name="photo" 
                         value={photo}/> 
                    </div>
                    <div className="mb-2">
                        <p className='text-center font-semibold text-xl'>Name</p>
                        <input className='h-10 ml-24 px-10  w-[70%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={name} 
                         onChange={(e)=> onValueChange(e)} 
                         name="name" 
                         value={name}/>
                     </div>
                     <div className="mb-2">
                        <p className='text-center font-semibold text-xl'>Specialty:</p>
                        <input className='h-10 ml-24 px-10 w-[70%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={specialty} 
                         onChange={(e)=> onValueChange(e)} 
                         name="specialty" 
                         value={specialty}/>
                     </div>  
                     <div className="mb-2">
                         <p className='text-center font-semibold text-xl'>Instructor Profile:</p>
                         <textarea className='ml-24 px-10  h-52 p-2  w-[70%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={Iprofile}
                         onChange={(e)=> onValueChange(e)} 
                         name="Iprofile" 
                         value={Iprofile}/>
                     </div>
                     <div className="mb-2">
                          <p className='text-center font-semibold text-xl'>Fighter Profile:</p>
                         <textarea className='ml-24 px-10 h-52 p-2 w-[70%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={Fprofile}
                         onChange={(e)=> onValueChange(e)} 
                         name="Fprofile" 
                         value={Fprofile}/> 
                     </div>
                     <div className="mb-2">
                         <input type="sumbit" className="btn btn-warning text-black mb-10 mt-3 fw-semibold ml-52" onClick={()=> editInstructorDetails()} value="Update"/> 
                     </div>
                 </form>
             </div>
        </div>
   )
}
