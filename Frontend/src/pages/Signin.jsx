import React from 'react'
import "../styles/signuppage.css"

const Signin = () => {
  return (
    <div className="signin">
        <div className="form">
            <h3>Register here</h3>
            <form>
                <label htmlFor="name">Fullname</label>
                <input type="text" name="name" placeholder='Enter Your Name'/>
                <label htmlFor="email">Email  </label>
                <input type="email" name="email" placeholder='Enter your Email' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Enter password' />
                <input type="submit" value="Registere"/>
            </form>
            <div className="bottom">
                <p>Already have an account</p>
            </div></div>
    </div>
  )
}

export default Signin