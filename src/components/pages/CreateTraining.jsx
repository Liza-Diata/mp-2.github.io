import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 



export const CreateTraining = () => {
    
    
    const [photo, setPhoto]= useState('');
    const [name, setName]= useState('');
    const [description1, setDescription1]= useState('');
    const [description2, setDescription2]= useState(''); 

    const redirect = useNavigate ();

    const handleSubmit = (e) => {
        e.preventDefault();
        const Membership ={ name, photo, description1, description2};
        fetch('https://live-json-server-kv2v.onrender.com/classes', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(Membership)
        }).then(() => {
            redirect('/trainingData')
        })
    } 
    return (
        <div className="container mt-32 mb-20">   
          
            <h1 className='text-center text-2xl font-bold mt-10'>Add New Training</h1>
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
            <p className="text-sm font-semibold font-serif px-20">Description1</p>
            <textarea className='ml-16 px-10 h-32 p-2 w-[60%] bg-white rounded-lg' 
                    value={description1}
                    onChange={(e) => setDescription1(e.target.value)}
                    />
                <p className="text-sm font-semibold font-serif px-20">Description2</p>
                <textarea className='ml-16 px-10 h-32 p-2 w-[60%] bg-white rounded-lg' 
                    required
                    value={description2}
                    onChange = {(e) => setDescription2(e.target.value)}
                    />                   
                    <button  className='font-semibold bg-amber-300 p-1 ml-44 rounded-lg mb-10'>Submit</button>
                </form>                     
            </div>
        </div>
           
    );
}







