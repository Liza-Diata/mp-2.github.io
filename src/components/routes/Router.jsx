import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NavBar from '../semantics/NavBar'
import Newsletter from '../pages/Newsletter'
import Membership from '../pages/Membership'
import Programs from '../pages/Programs'
import Admin from '../pages/Admin'
import { TrainingTable } from '../pages/TrainingTable'
import { Edit }from '../pages/Edit'
import UpdateData from '../pages/UpdateData'
import Read from '../pages/Read'
import Instructors from '../pages/Instructors'
import InstructorsData from '../pages/InstructorsData'
import { AddInstructor } from '../pages/AddInstructor'
import EditInstructor from '../pages/EditInstructor'
import EditTraining from '../pages/EditTraining'
import { CreatePlan } from '../pages/CreatePlan'
import { CreateTraining } from '../pages/CreateTraining'
import { Footer } from '../semantics/Footer'




const Router = () => {
  return (  

        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/nav' element={<NavBar/>}/>
            <Route path='/news' element={<Newsletter/>}/>
            <Route path='/allbasic' element={<Membership/>}/> 
            <Route path='/training' element={<Programs/>}/>  
            <Route path='/admin' element={<Admin/>}/>  
            <Route path='/trainingdata' element={<TrainingTable/>}/> 
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/upData' element={<UpdateData/>}/>
            <Route path='/view/:id' element={<Read/>}/>
            <Route path='/instructors' element={<Instructors/>} />
            <Route path='/instructorData' element={<InstructorsData/>} />
            <Route path='/addinstructor' element={<AddInstructor/>} />
            <Route path='/editinstructor/:id' element={<EditInstructor/>}/>
            <Route path='/edittraining/:id' element={<EditTraining/>}/>           
            <Route path='/createPlan'element={<CreatePlan/>}/>
            <Route path='/createTraining'element={<CreateTraining/>}/>
            <Route path='/footer' element={<Footer/>}/>        
       
        </Routes>
  )
}

export default Router