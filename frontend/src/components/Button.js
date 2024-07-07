import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import axios from 'axios'


const Button = () => {

const handleChange =(e) =>{
    e.preventDefault();

    const formData = new FormData()
    formData.append("photo", e.target.files[0]);

    axios
    .post("http://localhost:5000/api/save",formData)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=> console.log(err));
}


  return (
    <label className='button'>
        <AiFillPlusCircle />
        <input
         hidden
         type='file' 
         name='file_picker' 
         id='file_picker' 
         onChange={(e)=>handleChange(e)}
         />
    </label>
    
   
  )
}

export default Button