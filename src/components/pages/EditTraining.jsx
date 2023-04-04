import React, { useState, useEffect } from 'react'
import { getAllClasses, editClass } from '../../Service/api'
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../semantics/NavBar';
import Button from 'react-bootstrap/Button';


const ClassCapturedVal = {
  name: "",
  photo: "",
  description1: "",
  description2: "",
  
}

export default function EditTraining() {

  //set captured value from client 
  const [classes, setClasses] = useState(ClassCapturedVal);
  const {name, photo, description1, description2} = classes;
  const {id} = useParams();
    //get  user
const getClasses = async ()=>{
  const response = await getAllClasses(id)
  setClasses(response.data)
  
}
 //function captured value from client 
   const onValueChange =(e)=>{
     setClasses({...classes, [e.target.name]: e.target.value});
     console.log(classes)
   }

   // useNavigate to redirect to specific route
 let redirect = useNavigate();
 
 //edit user by id
 const editClassesDetails = async()=>{
  await editClass(id, classes)
  redirect('/trainingdata')
 }

 useEffect(() =>{
    getClasses();
}, []);

  
   return (
     <div className="container mt-32 mb-32">
     <NavBar/>   
     <h3 className='mb-10 text-black font-bold text-center'>Edit Program</h3>
        <div className="bg-gray-200 pt-10 mx-52 rounded-3xl">
                 <form>                    
                     <div className="mb-2">
                        <label className='ml-20 font-semibold text-xl'>Title:</label>
                        <input className='h-10 ml-24 px-10  w-[60%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={name} 
                         onChange={(e)=> onValueChange(e)} 
                         name="name" 
                         value={name}
                         />
                     </div>
                     <div className="mb-2 ">
                        <label className='ml-20 font-semibold text-xl'>Photo URL:</label>
                        <textarea className='ml-10 px-10 h-20 w-[60%] bg-white rounded-lg' 
                         type="text" 
                         placeholder="Photo Url"
                         onChange={(e)=> onValueChange(e)} 
                         name="photo" 
                         value={photo}/>
                       
                         
                     </div>
                     <div className="mb-2">
                         <label className='ml-20 font-semibold text-xl'>Description 1:</label>
                         <textarea className='ml-5 px-10 h-52 p-5  w-[60%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={description1}
                         onChange={(e)=> onValueChange(e)} 
                         name="description1" 
                         value={description1}
                         />
                     </div>
                     <div className="mb-2">
                          <label className='ml-20 font-semibold text-xl'>Description 2:</label>
                         <textarea className='ml-5 px-10 h-52 p-5 w-[60%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={description2}
                         onChange={(e)=> onValueChange(e)} 
                         name="description2" 
                         value={description2}
                         /> 
                     </div>
                     <div className="mb-2">
                         <input type="sumbit" className="btn btn-warning text-black mb-10 mt-3 fw-semibold ml-80" onClick={()=> editClassesDetails()} value="Update"/> 
                     </div>
                 </form>
             </div>
            </div>
     
   )
}
