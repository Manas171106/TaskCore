import React from 'react'
import "../styles/adminpage.css"
import Headers from '../components/Headers'

const AdminDashboard = () => {
  return (
    <div className="admin">
      <Headers/>
        <div className="admin-hero">
        <div className="admin-left">
            <form>
                <label htmlFor="title">Title  </label>
                <input type="text" name="title" placeholder='Enter Title' />
                <label htmlFor="Date">Date</label>
                <input type="Date" name="Date" placeholder='Enter Date' />
                <label htmlFor="Assign">Assign to</label>
                <input type="text" name="Assign" placeholder='Assign to'/>
                <label htmlFor="Category">Category</label>
                <input type="text" name="Category" placeholder='DEv,BUG,Etc..'/>
                <label htmlFor="Description">Description</label>
                <textarea name='Description'></textarea>
                <input type="submit" value="Create"/>
            </form>
        </div>
        <div className="admin-right">
          <h2>All Tasks</h2>
          <div className="cover">
            <div className="headers">
              <h3>Name</h3>
              <h3>Active</h3>
              <h3>Completed</h3>
              <h3>Failed</h3>
              <h3>All Tasks</h3>
            </div>
            <div className="status">
              <div className="employee-status">
                <div className="name">
                <h3>Alice jhonsan</h3></div>
                <h3>0</h3>
                <h3>0</h3>
                <h3>0</h3>
                <h3>0</h3>
              </div>
              <div className="employee-status">
                <div className="name">
                <h3>Alice jhonsan</h3></div>
                <h3>0</h3>
                <h3>0</h3>
                <h3>0</h3>
                <h3>0</h3>
              </div>
              <div className="employee-status">
                <div className="name">
                <h3>Alice jhonsan</h3></div>
                <h3>0</h3>
                <h3>0</h3>
                <h3>0</h3>
                <h3>0</h3>
              </div>
            </div>
          </div>
        </div></div>
    </div>
  )
}

export default AdminDashboard