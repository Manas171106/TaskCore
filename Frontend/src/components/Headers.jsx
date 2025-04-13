import React from 'react'
import "../styles/header.css"

const Headers = () => {
  return (
    <div className="header">
        <div className="profile-name">
            <i><h3>Hello <br />
            Admin</h3></i>
        </div>
        <button>Log out</button>
    </div>
  )
}

export default Headers