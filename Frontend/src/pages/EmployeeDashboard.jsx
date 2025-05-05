import React, { useEffect, useState } from "react";
import Headers from "../components/Headers";
import "../styles/employeepage.css";
import axios from "axios";


const EmployeeDashboard = () => {

  const update = async(task,status)=>{
    const Tstatus={status}
    const taskid=task._id
    console.log(taskid)
    const res=await axios.post(`/user/task/${taskid}/update`,Tstatus,{
            withCredentials: true,
          })
          console.log(res.data)

    fetchTasks()
  }

  const [tasks,settasks]=useState([])

  
  
  const fetchTasks = async () => {
    try {
      const res = await axios.get("/user/view", {
        withCredentials: true,
      });
      settasks(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  
  useEffect(() => {
    fetchTasks();
  }, []);

  let active=0,failed=0,complete=0,total=tasks.length;

    tasks.forEach((task)=>{
      if(task.status=="completed"){
        complete+=1;
      }else if(task.status=="failed"){
        failed+=1;
      }else{
        active+=1;
      }
    })


    tasks.map((task)=>{
      if(task.status=="pending"){
        return (
        <div key={task._id} className="task new">
          <div className="top">
            <h3>high</h3>
          </div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="bottom">
          <button onClick={()=>{
            update(task,"completed")
          }}>
          ✔
        </button>
        <button onClick={()=>{
          update(task,"failed")
        }}>❌</button>
        <h3>{new Date(task.date).toLocaleDateString()}</h3>
          </div>
        </div>
      )
      }
    })


  return (
    <div className="employee">
      <Headers />
      <div className="employee-hero">
        <div className="taskstatus">
          <div className="tasks new">
            <em>
              <h3>New</h3>
              <h3>{active}</h3>
            </em>
          </div>
          <div className="tasks completed">
            <em>
              <h3>Completed</h3>
              <h3>{complete}</h3>
            </em>
          </div>
          <div className="tasks failed">
            <em>
              <h3>Failed</h3>
              <h3>{failed}</h3>
            </em>
          </div>
          <div className="tasks all">
            <em>
              <h3>All Tasks</h3>
              <h3>{total}</h3>
            </em>
          </div>
        </div>

        <div className="task-slider">
        {
          tasks.map((task)=>{
            if(task.status=="pending"){
              return (
              <div key={task._id} className="task new">
                <div className="top">
                  <h3>high</h3>
                </div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <div className="bottom">
                <button onClick={()=>{
                  update(task,"completed")
                }}>
                ✔
              </button>
              <button onClick={()=>{
                update(task,"failed")
              }}>❌</button>
              <h3>{new Date(task.date).toLocaleDateString()}</h3>
                </div>
              </div>
            )
            }
          })
        }
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
