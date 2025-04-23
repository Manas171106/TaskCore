import React, { useState } from 'react'
import "../styles/loginpage.css"
import { useNavigate } from 'react-router-dom';

import axios from "axios"

const Login = () => {

    const navigate=useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

<input type="submit" value={loading ? "Logging in..." : "Login"} disabled={loading} />

    

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const formdata = { email, password };
    
      try {
        const res = await axios.post("http://localhost:3000/user/login", formdata, {
          withCredentials: true,
        });

        if(res.data.user){
          alert("User logged in successfully");
          localStorage.setItem("user", JSON.stringify(res.data.user));
      
          const userrole =res.data.user.role;
          if (userrole === "admin") {
            navigate("/Admin");
          } else if (userrole === "employee") {
            navigate("/employee");
          }
      
        }else{
          alert("user doesnt exist")
        }
        setEmail("");
        setPassword("");
    
      } catch (err) {
        console.error("Login error:", err);
        alert("Login failed. Please check your credentials.");
      }
      setLoading(false);
    };
    


  return (
    <div className="login">
        <div className="form">
            <div className="form-left">
                <div className="userimage">

                </div>
                <h3><i>Welcome back!</i></h3>
            </div>
                <div className="form-right">
                    <h3>Login</h3>
            <form onSubmit={(e)=>{
                handleSubmit(e)
            }}>
                <label htmlFor="email">Email  </label>
                <input type="email" name="email" value={email} onChange={(e)=>{
                  setEmail(e.target.value)
                }}   placeholder='Enter your Email' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={(e)=>{
                  setPassword(e.target.value)
                }}  placeholder='Enter password' />
                <input type="submit" value={loading ? "Logging in..." : "Login"} disabled={loading}/>
            </form>
            <div className="bottom">
            <p onClick={()=>{
              navigate("/register")
            }}>Don't have an account?</p></div>
            </div>
        </div>
    </div>
  )
}

export default Login