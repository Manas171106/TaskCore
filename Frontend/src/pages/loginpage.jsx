import React, { useState } from 'react';
import "../styles/loginpage.css";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/user/login", data, {
        withCredentials: true,
      });

      if (res.data.user) {
        alert("User Logged in Successfully");
        localStorage.setItem("user", JSON.stringify(res.data.user));

        const userrole = res.data.user.role;
        if (userrole === "admin") {
          navigate("/Admin");
        } else if (userrole === "employee") {
          navigate("/employee");
        }
      } else {
        alert("User doesn't exist");
      }
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
          <h3>Welcome back!</h3>
          <div className="welcome">
            <h3>To track all your tasks please login</h3>
          </div>
        </div>
        <div className="form-right">
          <h3>Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your Email"
            />
            {errors.email && <span>*This field is required</span>}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", { required: true ,minLength:{value:3,message: "Password must be at least 3 characters"},maxLength:{value:12,message: "Password must be at max 12 characters"}})}
              placeholder="Enter your Password"
            />
            {errors.password && <span>{errors.password.message}</span>}

            <input type="submit" value={loading ? "Logging in..." : "Login"} disabled={loading} />
          </form>
          <div className="bottom">
            <p onClick={() => navigate("/register")}>Don't have an account?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
