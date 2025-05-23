import React, { useEffect, useState } from "react";
import Headers from "../components/Headers";
import "../styles/employeepage.css";
import axios from "axios";

const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState([]);

  const update = async (task, status) => {
    try {
      const taskid = task._id;
      const Tstatus = { status };

      console.log(taskid);

      const res = await axios.post(
        `http://localhost:3000/user/task/${taskid}/update`,
        Tstatus,
        { withCredentials: true }
      );

      console.log(res.data);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const fetchTasks = async () => {
    try {
      const res = await axios.get("/user/view", {
        withCredentials: true,
      });
      setTasks(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  let active = 0,
    failed = 0,
    complete = 0,
    total = tasks.length;

  tasks.forEach((task) => {
    if (task.status === "completed") complete++;
    else if (task.status === "failed") failed++;
    else active++;
  });

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
          {tasks
            .filter((task) => task.status === "pending")
            .map((task) => (
              <div key={task._id} className="task new">
                <div className="top">
                  <h3>{task.priority || "high"}</h3>
                </div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <div className="bottom">
                  <button onClick={() => update(task, "completed")}>✔</button>
                  <button onClick={() => update(task, "failed")}>❌</button>
                  <h3>
                    {task.date
                      ? new Date(task.date).toLocaleDateString()
                      : "No Date"}
                  </h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;