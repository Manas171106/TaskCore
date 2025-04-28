import React, { useEffect, useState } from 'react'
import "../styles/adminpage.css"
import Headers from '../components/Headers'
import axios from "axios"

const AdminDashboard = () => {

  const [users,setusers]=useState([])
  const [title,settitle]=useState("")
  const [description,setdescription]=useState("")
  const [date,setdate]=useState("")
  const [assignTo,setassignTo]=useState("")
  const [category,setcategory]=useState("")

  const handletask=async (e)=>{
    e.preventDefault()
    let formdata = {title,description,date,assignTo,category}
    try{
      await axios.post("http://localhost:3000/user/create",formdata,{
        withCredentials: true,
      })
      alert("Task created successfully!");

      const res = await axios.get("http://localhost:3000/user/allusers", {
        withCredentials: true,
      });
      setusers(res.data);
    }catch(err){
      console.log("task error: ",err)
    }
    settitle("")
    setdescription("")
    setdate("")
    setcategory("")
    setassignTo("")
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/allusers", {
          withCredentials: true,
        });
        setusers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    })();
  }, []);
  
  return (
    <div className="admin">
      <Headers/>
        <div className="admin-hero">
        <div className="admin-left">
            <form onSubmit={(e)=>{
              handletask(e)
            }}>
                <label htmlFor="title">Title  </label>
                <input type="text" name="title" onChange={(e)=>{
                  settitle(e.target.value)
                }} placeholder='Enter Title' />
                <label htmlFor="Date">Date</label>
                <input type="Date" name="Date" onChange={(e)=>{
                  setdate(e.target.value)
                }}  placeholder='Enter Date' />
                <label htmlFor="Assign">Assign to</label>
                <input type="text" name="Assign" onChange={(e)=>{
                  setassignTo(e.target.value)
                }}  placeholder='Assign to'/>
                <label htmlFor="Category">Category</label>
                <input type="text" name="Category" onChange={(e)=>{
                  setcategory(e.target.value)
                }}  placeholder='DEv,BUG,Etc..'/>
                <label htmlFor="Description">Description</label>
                <textarea onChange={(e)=>{
                  setdescription(e.target.value)
                }}  name='Description'></textarea>
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
              {
                users.map((user)=>{
                  let completed=0;
                  let failed=0
                  let active=0;
                  let total=user.tasks.length
                  const tasks=user.tasks
                  tasks.forEach(task => {
                    if(task.status=="completed"){
                      completed+=1;
                    }else if(task.status=="failed"){
                      failed+=1;
                    }else{
                      active+=1;
                    }
                  });
                  return (
                    <div key={user._id} className="employee-status">
                      <div className="name">
                        {user.fullname}
                      </div>
                        <h3>{active}</h3>
                        <h3>{completed}</h3>
                        <h3>{failed}</h3>
                        <h3>{total}</h3>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div></div>
    </div>
  )
}

export default AdminDashboard