import React from 'react'

const Signin = () => {
  return (
    <div className="signin">
        <div className="form">
            <div className="form-left">
                <div className="userimage">

                </div>
                <h3><i>Welcome back!</i></h3>
            </div>
                <div className="form-right">
            <form>
                <label htmlFor="name">Fullname</label>
                <input type="text" name="name" placeholder='Enter Your Name'/>
                <label htmlFor="email">Email  </label>
                <input type="email" name="email" placeholder='Enter your Email' />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='Enter password' />
                <input type="submit" value="Login"/>
            </form></div>
        </div>
    </div>
  )
}

export default Signin