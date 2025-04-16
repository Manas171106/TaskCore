import React from 'react'
import "../styles/loginpage.css"

const Lognin = () => {
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
            <form>
                <label htmlFor="email">Email  </label>
                <input type="email" name="email" placeholder='Enter your Email' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Enter password' />
                <input type="submit" value="Login"/>
            </form>
            <div className="bottom">
            <p>Don't have an account?</p></div>
            </div>
        </div>
    </div>
  )
}

export default Lognin