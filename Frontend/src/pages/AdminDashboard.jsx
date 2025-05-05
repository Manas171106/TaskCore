import React, { useEffect, useState } from 'react';
import "../styles/adminpage.css";
import Headers from '../components/Headers';
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user/allusers", {
        withCredentials: true,
      });
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleTask = async (e) => {
    e.preventDefault();
    const formData = { title, description, date, assignTo, category };

    try {
      await axios.post("http://localhost:3000/user/create", formData, {
        withCredentials: true,
      });
      alert("Task created successfully!");
      fetchUsers(); // Refresh data after task creation
      // Clear form
      setTitle("");
      setDescription("");
      setDate("");
      setAssignTo("");
      setCategory("");
    } catch (err) {
      console.error("Task creation error:", err);
      alert("Failed to create task.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="admin">
      <Headers />
      <div className="admin-hero">
        <div className="admin-left">
          <form onSubmit={handleTask}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
              required
            />

            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <label htmlFor="assignTo">Assign to</label>
            <input
              type="text"
              name="assignTo"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="Assign to"
              required
            />

            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Dev, Bug, Etc..."
              required
            />

            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              required
            />

            <input type="submit" value="Create" />
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
      {users.map((user) => {
        let completed = 0;
        let failed = 0;
        let active = 0;
        let total = user.tasks.length;
        const tasks = user.tasks || [];

        tasks.forEach((task) => {
          if (task.status === "completed") completed++;
          else if (task.status === "failed") failed++;
          else active++;
        });

        return (
          <div key={user._id}>
            <div className="employee-status">
              <div className="name">{user.fullname}</div>
              <h3>{active}</h3>
              <h3>{completed}</h3>
              <h3>{failed}</h3>
              <h3>{total}</h3>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default AdminDashboard;
