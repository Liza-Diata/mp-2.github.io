import axios from 'axios';

const urlBasic = 'https://live-json-server-kv2v.onrender.com/Basic'

const urlclasses = "https://live-json-server-kv2v.onrender.com/classes"

const urlInstructors = "https://live-json-server-kv2v.onrender.com/instructors"

const urlprogram = "https://live-json-server-kv2v.onrender.com/program"



//getting records
export const getAllBasic = async(id)=>{
    try {
        id = id || "";
        return await axios.get(`${urlBasic}/${id}`)
    }catch (error) {
        console.log(error)
    }
}     
//delete record membership plan
export const deleteBasic = async (id) => {
    return await axios.delete(`${urlBasic}/${id}`);
}



// getting Class
export const getAllClasses = async(id)=>{
    try {
        id = id || "";
        return await axios.get(`${urlclasses}/${id}`);
    }catch (error) {
        console.log(error)
    }
}

//delete Classes
export const deleteClass = async (id) => {
    return await axios.delete(`${urlclasses}/${id}`);
}


// edit Class
export const editClass = async(id, classes) => {
    return await axios.put(`${urlclasses}/${id}`, classes);
}


// edit plan
export const editBasic = async(id, Basic) => {
    return await axios.put(`${urlBasic}/${id}`, Basic);
}


// adding plan
export const addPlan = async(plan) => {
    return await axios.post(urlBasic, plan)
}

//getting allInstructors

export const getAllInstructors = async(id)=>{
    try {
        id = id || "";
        return await axios.get(`${urlInstructors}/${id}`);
    }catch (error) {
        console.log(error)
    }
}

//delete Instructors
export const deleteInstructor = async (id) => {
    return await axios.delete(`${urlInstructors}/${id}`);
}


// edit Instructors
export const editInstructor = async(id, instructors) => {
    return await axios.put(`${urlInstructors}/${id}`, instructors);
}


export const getprogram = async(id)=>{
    try {
        id = id || "";
        return await axios.get(`${urlprogram}/${id}`);
    }catch (error) {
        console.log(error)
    }
}


