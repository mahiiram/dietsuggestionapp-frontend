import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { registerValidation } from '../helper/Validate.js';
import convertTobase64 from '../helper/Converter.js';
import { registerUser } from '../helper/helper.js';
import '../Components/styles/Username.css'


function Register() {
   
   const [file,setFile]=useState()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      email:'',
      username:'',
      password:'',
      profile:file || ''
    },
    validate: registerValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values =>{
      values = await Object.assign(values,{profile:file || ''})
     const registerPromise = registerUser(values);
     toast.promise(registerPromise,{
      loading:'creating....',
      success: <b>Register successfully</b>,
      error: <b>Couldnt Register</b>

     })
      //  console.log(values)
       registerPromise.then(function(){navigate('/login')})
    }
    
  })
  //formik doesnt support file upload so we need to create this handler
   const onUpload = async e =>{
    const base64 =await convertTobase64(e.target.files[0]);
    setFile(base64)
   }

  return (
    
    <div className='Topdiv'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='Maindiv'>  
       <div className='text'>
        <h1 className='text'>SignUp</h1>
        <p className='text'>Happy to join you</p>
       </div>
       <div className='imageDiv'>
        <label htmlFor='profile'>
        <img  src={file || "https://png.pngtree.com/png-vector/20201203/ourmid/pngtree-businessman-icon-vector-and-glyph-png-image_2499766.jpg"} alt='' />
        </label>
        <input onChange={onUpload} type='file' id='profile' name='profile'/>
      </div>
      
      <div className='form-div'>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label" >Email</label>
            <input {...formik.getFieldProps('email')} placeholder='Enter Email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <label for="exampleInputEmail1" className="form-label" >UserName</label>
            <input {...formik.getFieldProps('username')} placeholder='Enter Username' type="text" className="form-control"/>
            <label for="exampleInputEmail1" className="form-label" placeholder='Enter Email'>Password</label>
            <input {...formik.getFieldProps('password')} placeholder='Enter Password' type="password" className="form-control"/>
            <div id="emailHelp" className="form-text">*Password must have minimum 8 character includes one special character and Number </div>
           
          </div>
          <div className='button-div'>
          <button type="submit" className="btn btn-primary" >SignUp</button>
          </div>
          <div className='button-div'><p className='text'>Already registered? <span><Link to='/login' style={{color:'blue'}} >Login</Link></span></p>
          </div>
          
          
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register