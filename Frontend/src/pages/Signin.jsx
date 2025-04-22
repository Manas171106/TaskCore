import React, { useState } from 'react'
import "../styles/signuppage.css"
import axios from "axios"

const Signin = () => {

  
  
  const [fullname,setfullname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [role,setrole]=useState("")

  return (
    <div className="signin">
        <div className="form">
            <h3>Register here</h3>
            <form>
                <label htmlFor="name">Fullname</label>
                <input type="text" name="name" value={fullname} onChange={(e)=>{
                  setfullname(e.target.value)
                }} placeholder='Enter Your Name'/>
                <label htmlFor="email">Email  </label>
                <input type="email" name="email" value={email} onChange={(e)=>{
                  setemail(e.target.value)
                }}  placeholder='Enter your Email' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={(e)=>{
                  setpassword(e.target.value)
                }}  placeholder='Enter password' />
                <label htmlFor="role">role</label>
                <input type="text" name="role" value={role} onChange={(e)=>{
                  setrole(e.target.value)
                }}  placeholder='Enter role' />
                <input type="submit" value="Registere"/>
            </form>
            <div className="bottom">
                <p>Already have an account</p>
            </div></div>
    </div>
  )
}

export default Signin