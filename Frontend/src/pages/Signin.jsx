import React, { useState } from 'react';
import "../styles/signuppage.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signin = () => {
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
      const res = await axios.post("http://localhost:3000/user/register", data, {
        withCredentials: true,
      });

      if (res.data.user) {
        alert("User registered successfully");
        localStorage.setItem("user", JSON.stringify(res.data.user));

        const role = res.data.user.role;
        if (role === "admin") {
          navigate("/Admin");
        } else if (role === "employee") {
          navigate("/employee");
        } else {
          navigate("/");
        }
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error("Signin error:", err);
      alert("Registration failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="signin">
      <div className="form">
        <h3>Register here</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fullname">Fullname</label>
          <input
            {...register("fullname", { required: "Full name is required" })}
            placeholder="Enter Your Name"
          />
          {errors.fullname && <span>{errors.fullname.message}</span>}

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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 3,
                message: "Password must be at least 3 characters",
              },
              maxLength:{
                value:12,
                message:"password must be at max 12 characters"
              }
            })}
            placeholder="Enter password"
          />
          {errors.password && <span>{errors.password.message}</span>}

          <label htmlFor="role">Role</label>
          <input
            {...register("role", {
              required: "Role is required",
              validate: (value) =>
                value === "admin" || value === "employee" || "Role must be 'admin' or 'employee'",
            })}
            placeholder="Enter role (admin or employee)"
          />
          {errors.role && <span>{errors.role.message}</span>}

          <input type="submit" value={loading ? "Please wait..." : "Register"} disabled={loading} />
        </form>

        <div className="bottom">
          <p onClick={() => navigate('/')}>Already have an account?</p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
