import React, { useState } from 'react'
import "../styles/signuppage.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signin = () => {

  const navigate=useNavigate()

  const [fullname,setfullname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [role,setrole]=useState("")
  const [loading, setLoading] = useState(false);

  
  const handlesubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
    const formdata={fullname,email,password,role}
    try{
          const res=await axios.post("http://localhost:3000/user/register",formdata,{
            withCredentials: true   })
      
            if(res.data.user){
      
              alert("user registered successfully")
              localStorage.setItem("user",JSON.stringify(res.data.user));
        
              let userrole=res.data.user.role;
        
              if(userrole=="admin"){
                navigate("/Admin")
              }else if(userrole=="employee"){
                navigate("/employee")
              }else{
                navigate("/")
              }
            }else{
              alert("something went wrong")
            }
      
            setemail("")
            setpassword("")
            setfullname("")
            setrole("")
          }catch(err){
            console.error("signin error:", err);
          }
          setLoading(false)
  }

  return (
    <div className="signin">
        <div className="form">
            <h3>Register here</h3>
            <form onSubmit={(e)=>{
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
                <input type="password" name="password" value={password} onChange={(e)=>{
                  setpassword(e.target.value)
                }}  placeholder='Enter password' />
                <label htmlFor="role">role</label>
                <input type="text" name="role" value={role} onChange={(e)=>{
                  setrole(e.target.value)
                }}  placeholder='Enter role' />
               <input type="submit" value={loading ? "wait a sec in" : "register"} disabled={loading}/>
            </form>
            <div className="bottom">
                <p onClick={()=>{
                 navigate('/')
                }}>Already have an account</p>
            </div></div>
    </div>
  )
}

export default Signin