import React, { useState, useEffect } from 'react'
import { getAllBasic, editBasic } from '../../Service/api'
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../semantics/NavBar';
import Button from 'react-bootstrap/Button';


const CapturedVal = {
   
    name: "",
    monthly: "",
    quarterly: "",
    halfyearly: "",
    yearly: "",
    inclusion: "",
}

export default function UpdateData() {

    const [Basic, setBasic] = useState(CapturedVal);
    const {name, monthly, quarterly, halfyearly, yearly, inclusion } = Basic;
    const { id } = useParams();
 
    const getBasic = async () => {
        const response = await getAllBasic(id)
        setBasic(response.data)
    }

 //function captured value from client 
   const onValueChange =(e)=>{
     setBasic({...Basic, [e.target.name]: e.target.value});
     console.log(Basic)
   }

   // useNavigate to redirect to specific route
 let redirect = useNavigate();
 
 //edit user by id
 const editBasicDetails = async()=>{
  await editBasic(id, Basic)
  redirect('/allbasic')
 }

 useEffect(() =>{
    getBasic();
}, []);

  
   return (
     <div className="container mt-3">
     <NavBar></NavBar>    
     <h1>Edit Program</h1>
        <div className="bg-gray-200 pt-10 mx-52 mt-32">
                 <form>
                     <div className="mb-2">
                        <label className='ml-20'>Title:</label>
                        <input className='h-10 ml-20 px-10  w-[60%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={name} 
                         onChange={(e)=> onValueChange(e)} 
                         name="name" 
                         value={name}
                         />
                     </div>
                     <div className="mb-2 ">
                        <label className='ml-20'>Monthly:</label>
                        <input className='h-10 ml-10 px-10  w-[60%] bg-white text-black rounded-lg' 
                         type="text" 
                         placeholder={monthly}
                         onChange={(e)=> onValueChange(e)} 
                         name="monthly" 
                         value={monthly}/>
                     </div>
                     <div className="mb-2">
                         <label className='ml-20'>Quarterly:</label>
                         <input className='h-10 ml-5 px-10 p-5  w-[60%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={quarterly}
                         onChange={(e)=> onValueChange(e)} 
                         name="quarterly" 
                         value={quarterly}
                         />
                     </div>
                     <div className="mb-2">
                          <label className='ml-20'>Half-Yearly:</label>
                         <input className='ml-5 px-10 h-52 p-5 w-[60%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={halfyearly}
                         onChange={(e)=> onValueChange(e)} 
                         name="halfyearly" 
                         value={halfyearly}
                         /> 
                     </div>
                     <div className="mb-2">
                          <label className='ml-20'>Yearly:</label>
                         <input className='ml-5 px-10 h-52 p-5 w-[60%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={yearly}
                         onChange={(e)=> onValueChange(e)} 
                         name="yearly" 
                         value={yearly}
                         /> 
                     </div>
                     <div className="mb-2">
                          <label className='ml-20'>Inclusion:</label>
                         <textarea className='ml-5 px-10 h-52 p-5 w-[60%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={inclusion}
                         onChange={(e)=> onValueChange(e)} 
                         name="inclusion" 
                         value={inclusion}
                         /> 
                     </div>
                     <div className="mb-2">
                         <input type="sumbit" className="btn btn-warning text-black mb-3 fw-semibold ml-64" onClick={()=> editBasicDetails()} value="Update"/> 
                     </div>
                 </form>
             </div>
            </div>
     
   )
}
