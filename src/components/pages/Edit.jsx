import React,  { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import NavBar from '../semantics/NavBar';
import { getAllBasic, editBasic } from '../../Service/api';

const CapturedVal = {
   
    name: "",
    monthly: "",
    quarterly: "",
    halfyearly: "",
    yearly: "",
    inclusion: "",
}

export const Edit = () => {

    const [Basic, setBasic] = useState(CapturedVal);
    const {name, monthly, quarterly, halfyearly, yearly, inclusion } = Basic;
    const { id } = useParams();

    const getBasic = async () => {
        const response = await getAllBasic(id)
        setBasic(response.data)
    }

    const onValueChange =(e) => {
        setBasic({...Basic, [e.target.name]: e.target.value});
        console.log(Basic)
    }
    const navigate = useNavigate()

    const editBasicDetails = async()=>{
        await editBasic(id, Basic)
        navigate('/admin')
    }

    useEffect(() => {
        getBasic();
    }, []);
        return (
            <div className='h-screen w-full pt-32 px-72 bg-[#262424]' >
                <NavBar />
         
                <div className='flex flex-col gap-y-3 bg-gray-300 pt-10 px-20 rounded-3xl'>
                <h4 className='text-center mb-5 pt'>Edit Plan</h4>
                <form>
                     <div className="mb-2">
                        <label className='ml-20 font-bold text-xl'>Title:</label>
                        <input className='h-10 ml-20 px-2  w-[53%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={name} 
                         onChange={(e)=> onValueChange(e)} 
                         name="name" 
                         value={name}
                         />
                     </div>
                     <div className="mb-2 ">
                        <label className='ml-10 font-bold text-xl'>Monthly:</label>
                        <input className='h-10 ml-20 px-2  w-[53%] bg-white text-black rounded-lg' 
                         type="text" 
                         placeholder={monthly}
                         onChange={(e)=> onValueChange(e)} 
                         name="monthly" 
                         value={monthly}/>
                     </div>
                     <div className="mb-2">
                         <label className='ml-8 font-bold text-xl'>Quarterly:</label>
                         <input className='h-10 ml-20 px-2  w-[53%] bg-white text-black rounded-lg'  
                         type="text" 
                         placeholder={quarterly}
                         onChange={(e)=> onValueChange(e)} 
                         name="quarterly" 
                         value={quarterly}
                         />
                     </div>
                     <div className="mb-2">
                          <label className='ml-5 font-bold text-xl'>Half-Yearly:</label>
                         <input className='h-10 ml-20 px-2  w-[53%] bg-white text-black rounded-lg' 
                         type="text" 
                         placeholder={halfyearly}
                         onChange={(e)=> onValueChange(e)} 
                         name="halfyearly" 
                         value={halfyearly}
                         /> 
                     </div>
                     <div className="mb-2">
                          <label className='ml-16 font-bold text-xl'>Yearly:</label>
                         <input className='h-10 ml-20 px-2 w-[53%] bg-white text-black rounded-lg'  
                         type="text" 
                         placeholder={yearly}
                         onChange={(e)=> onValueChange(e)} 
                         name="yearly" 
                         value={yearly}
                         /> 
                     </div>
                  
                     <div className="mb-2 px-2 ">  
                     <label className='ml-9 font-bold text-xl'>Inclusion:                 
                         <textarea className='ml-40 h-52 p-5 font-normal text-base w-[60%] bg-white rounded-lg' 
                         type="text" 
                         placeholder={inclusion}
                         onChange={(e)=> onValueChange(e)} 
                         name="inclusion" 
                         value={inclusion}
                         /> </label> 
                     </div>
                        <div className="mb-2">
                         <input type="sumbit" className="btn btn-secondary text-white  mb-3 fw-bold ml-72 w-24" onClick={()=> editBasicDetails()} value="Update"/> 
                     </div>
                    </form>
                </div>
            </div>            
            )
        }
 