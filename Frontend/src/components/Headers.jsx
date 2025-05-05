import React from 'react'
import "../styles/headers.css"
import axios from "../api/axios.js";
import { useNavigate } from 'react-router-dom'

const Headers = () => {

  const navigate=useNavigate()
  
  const logout=async(e)=>{
    localStorage.setItem("user","")
    await axios.post("/user/logout",{
      withCredentials: true   })
      navigate("/")
    }
    
    const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="header">
        <div className="profile-name">
            <i><h3>Hello <br />
            {user.fullname}</h3></i>
        </div>
        <button onClick={(e)=>{
          logout(e)
        }}>Log out</button>
    </div>
  )
}

export default Headers