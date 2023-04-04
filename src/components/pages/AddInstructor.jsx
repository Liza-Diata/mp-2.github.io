import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { getprogram } from '../../Service/api';



export const AddInstructor = () => {
    
    
    const [photo, setPhoto]= useState('');
    const [name, setName]= useState('');
    const [specialty, setSpecialty]= useState([]);
    const [Iprofile, setIprofile]= useState('');
    const [Fprofile, setFprofile]= useState(''); 

    const redirect = useNavigate ();

    const handleSubmit = (e) => {
        e.preventDefault();
        const Instructor ={ photo, name, specialty, Iprofile, Fprofile};
        fetch('https://live-json-server-kv2v.onrender.com/instructors', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(Instructor)
        }).then(() => {
            redirect('/instructorData')
        })
    } 

    const handlechange = (e, index) => {
        console.log(e.target.value)
        const activeData = document.getElementById(index).checked
        if(activeData == true){
            setSpecialty(oldData=>[...oldData, e.target.value])
        }else{
            setSpecialty(specialty.filter(values => values !== e.target.value))
        }

    }

    const [program, setProgram] = useState([]);
    useEffect(() =>{
        getPrograms();
    }, []);

    const getPrograms = async () =>{
        const response = await getprogram();
        console.log(response);
        setProgram(response.data);
    } 
    return (
        <div className="container mt-32 mb-20">   
    
            <h1 className='text-center text-2xl font-bold mt-10'>Add New Instructor</h1>
            <div className="bg-gray-200 pt-10  mt-8 mx-72 pl-16 rounded-3xl">
            <form onSubmit={handleSubmit}>
            <p className="text-sm font-semibold font-serif px-20">Image URL:</p>
                <input className='h-10 ml-16 px-10 mb-2 w-[60%] bg-white rounded-lg' 
                    type="text"
                    required
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    />
            <p className="text-sm font-semibold font-serif px-20">Name:</p>
                <input className='h-10 ml-16 px-10 mb-2 w-[60%] bg-white rounded-lg' 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
            <p className="text-sm font-semibold font-serif px-20">Specialty</p>
            {
                program.map((program, i)=>
                    <div key={i} className='ml-32 mb-3'><br/>
                        <input id={i} type="checkbox" value={program.program} onChange={(e) => handlechange( e, i)}/><span>{program.program}</span>
                    </div>
                )                
            }
            <br/>
            <p className="text-sm font-semibold font-serif px-20">Instructor Profile</p>
                <textarea className='ml-16 px-10 h-32 p-2 w-[60%] bg-white rounded-lg' 
                    required                    
                    value={Iprofile}
                    onChange = {(e) => setIprofile(e.target.value)}
                    />
                
                <p className="text-sm font-semibold font-serif px-20">Fighter Profile</p> 
                <textarea className='ml-16 px-10 h-32 p-2 w-[60%] bg-white rounded-lg' 
                    required                    
                    value={Fprofile}
                    onChange = {(e) => setFprofile(e.target.value)}
                    />                   
                    <button  className='font-semibold bg-amber-300 p-1 ml-44 rounded-lg mb-10'>Submit</button>
                </form>                     
            </div>
        </div>
           
    );
}







