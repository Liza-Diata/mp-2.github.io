import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import NavBar from '../semantics/NavBar';
import { Footer } from '../semantics/Footer';


export const CreatePlan = () => {
    
    const [name, setName]= useState('');
    const [monthly, setMonthly]= useState('');
    const [quarterly, setQuarterly]= useState('');
    const [halfyearly, setHalfyearly]= useState('');
    const [yearly, setYearly]= useState('');
    const [inclusion, setInclusion]= useState('');

    const redirect = useNavigate ();

    const handleSubmit = (e) => {
        e.preventDefault();
        const Membership ={ name, monthly, quarterly, halfyearly, yearly, inclusion};
        fetch('https://live-json-server-kv2v.onrender.com/Basic', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(Membership)
        }).then(() => {
            redirect('/admin')
        })
    } 
    return (
        <div className='h-screen w-full pt-32 px-72 bg-[#262424]' > 
        <NavBar/>         
        <div className='flex flex-col gap-y-3 bg-gray-300 pt-10 px-20 rounded-3xl'>
        <h4 className='text-center font-bold mb-5 pt'>Create New Membership Plan</h4>
            <form onSubmit={handleSubmit}>
            <div className="mb-2">
                        <label className='ml-20 font-bold text-xl'>Title:</label>
                        <input className='h-10 ml-20 px-2  w-[53%] bg-white rounded-lg' 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    
                    />
                </div>
                <div className="mb-2 ">
                        <label className='ml-10 font-bold text-xl'>Monthly:</label>
                        <input className='h-10 ml-20 px-2  w-[53%] bg-white text-black rounded-lg' 
                    required
                    value={monthly}
                    onChange={(e) => setMonthly(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                         <label className='ml-8 font-bold text-xl'>Quarterly:</label>
                         <input className='h-10 ml-20 px-2  w-[53%] bg-white text-black rounded-lg'  
                    type="text"
                    required
                    value={quarterly}
                    onChange={(e) => setQuarterly(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                          <label className='ml-5 font-bold text-xl'>Half-Yearly:</label>
                         <input className='h-10 ml-20 px-2  w-[53%] bg-white text-black rounded-lg' 
                    type="text"
                    required
                    value={halfyearly}
                    onChange={(e) => setHalfyearly(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                          <label className='ml-16 font-bold text-xl'>Yearly:</label>
                         <input className='h-10 ml-20 px-2 w-[53%] bg-white text-black rounded-lg'  
                    type="text"
                    required
                    value={yearly}
                    onChange={(e) => setYearly(e.target.value)}
                    />  
                </div>              
                <div className="mb-2 px-2 ">  
                     <label className='ml-9 font-bold text-xl'>Inclusion:                 
                         <textarea className='ml-40 h-52 p-5 font-normal text-base w-[60%] bg-white rounded-lg' 
                    required
                    value={inclusion}
                    onChange = {(e) => setInclusion(e.target.value)}
                    ></textarea> 
                </label>
                </div>                  
                    <button  className='font-semibold bg-amber-300 p-1 ml-72 rounded-lg mb-10'>Submit</button>
                </form>                     
            </div>
          </div>
      
       
    );
}







