import React, { useState } from 'react'
import "../styles/signuppage.css"
import axios from "axios"

const Signin = () => {

  
  
  const [fullname,setfullname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [role,setrole]=useState("")

  const handlesubmit=async(e)=>{
    e.preventDefault()
    const formdata={fullname,email,password,role}

    const res=await axios.post("http://localhost:3000/user/register",formdata,{
      withCredentials: true   })

      alert("user registered successfully")
  }

  return (
    <div className="signin">
        <div className="form">
            <h3>Register here</h3>
            <form on onSubmit={(e)=>{
              handlesubmit(e)
            }}>
                <label htmlFor="name">Fullname</label>
                <input type="text" name="name" value={fullname} onChange={(e)=>{
                  setfullname(e.target.value)
                }} placeholder='Enter Your Name'/>
                <label htmlFor="email">Email  </label>
                <input type="email" name="email" value={email} onChange={(e)=>{
                  setemail(e.target.value)
                }}  placeholder='Enter your Email' />
                <label htmlFor="password">Password</label>
<<<<<<< HEAD
                <input type="password" name="password" placeholder='Enter password' />
                <input type="submit" value="Register"/>
=======
                <input type="password" name="password" value={password} onChange={(e)=>{
                  setpassword(e.target.value)
                }}  placeholder='Enter password' />
                <label htmlFor="role">role</label>
                <input type="text" name="role" value={role} onChange={(e)=>{
                  setrole(e.target.value)
                }}  placeholder='Enter role' />
                <input type="submit" value="Registere"/>
>>>>>>> 62628c99b9bea1365ad0aa3f0740e05f505ae5d4
            </form>
            </div>
    </div>
  )
}

export default Signin