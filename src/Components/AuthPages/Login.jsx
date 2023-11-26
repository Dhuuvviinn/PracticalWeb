import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useFormik} from "formik"
import { loginSchema, signUpSchema } from '../Schemas/Schemas'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
const Login = ({setAuth}) => {
    const initialValues = {
        name:"",
        password:""
      }
     
      const navigator = useNavigate()
      const [passwordCheck, setpasswordCheck] = useState(true)
    const {values,errors,handleChange,handleBlur,handleSubmit,touched} = useFormik({
        initialValues:initialValues,
        validationSchema:loginSchema,
       onSubmit:(values,action)=>{
        if (values.name == import.meta.env.VITE_API_NAME && values.password == import.meta.env.VITE_API_PASSWORD) {
              setAuth(true)
             navigator("/")
            }else{
              setpasswordCheck(false)
            }
       }
    })
  
    const imageAddress = "data:image/jpeg;base64,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"
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:"center",height:"100vh",background:"F0FFFF"}}>
       <Box sx={{borderRadius:"10px",boxShadow:"0px 2px 6px 0px black", padding:"2rem",display:"flex",flexDirection:"column",alignItems:"center",background:"white"}}>
        <Typography variant="h3" marginBottom={5} fontWeight={700}>Login</Typography>
        <div className='logoImage'>
        <img src={imageAddress} alt="" />
        </div>
        <form onSubmit={handleSubmit} style={{ display:"flex",flexDirection:"column",alignItems:"center",background:"white"}}>
        {
          !passwordCheck &&  <Alert severity="error">PLEASE WRITE CORRECT USERNAME AND PASSWORD</Alert>
        }
        <div>
      
        <input className='inputName' placeholder='name' type='text' name="name" value={values.name} onChange={handleChange}/>
        {
          errors.name && touched.name ? <p style={{color:"red"}}>{errors.name}</p>:""
        }
        </div>
  <div>
  <input className='inputName' placeholder='password' type='password' name="password" value={values.password} onChange={handleChange}/>
  {
    errors.password && touched.password ? <p style={{color:"red"}}>{errors.password}</p>:""
  }
  </div>
        <div>
        <button  className='LoginSubmit'  type="submit">Submit</button>
        </div>
        
        </form>
        <Typography sx={{marginTop:"4rem"}}>Don't have an account?<Link to="/signUp" style={{textDecoration:"none"}}> Sign up</Link></Typography>
       </Box>


       
    </Box>
  )
}

export default Login
