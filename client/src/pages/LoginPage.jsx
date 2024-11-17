import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../auth/authslice";
import "./LoginPage.css";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      toast.success("Registration successful!");
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const { email, password } = formData;
  const validateForm = () => {
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return false;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }

    return true;
  };

  const changeHandler = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    toast.success("Login Successful");
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="app-container">
        <div className="left-panel">
          <button type="button" className="back-button">
            <ArrowLeft size={20} />
          </button>
          <div className="sign-up-link">
            Not a member?{" "}
            {/* <a href="#" className="sign-up">
              Sign up
            </a> */}
            <Link to="/signup" className="sign-up">
              Sign up
            </Link>
          </div>

          <div className="login-form">
            <h1 className="title">Login</h1>
            <p className="subtitle">Welcome back to Easymail</p>

            <label htmlFor="email" className="label">
              <p>
                Email <sup className="text-red-500">*</sup>
              </p>
              <div className="input-group">
                <input
                  type="email"
                  value={formData.email}
                  name="email"
                  placeholder="Enter email"
                  onChange={changeHandler}
                  className="input-field"
                />
              </div>
            </label>

            <label htmlFor="password" className="label">
              <p>
                Password <sup className="text-red-500">*</sup>
              </p>
              <div className="input-group">
                <input
                  type="password"
                  value={formData.password}
                  name="password"
                  placeholder="••••••"
                  onChange={changeHandler}
                  className="input-field"
                />
              </div>
            </label>

            <div className="forgot-password">
              <a href="#" className="forgot-password-link">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="submit-button">
              Login
            </button>

            <button type="button" className="google">
              <FcGoogle size={20} />
              <p>Login with Google</p>
            </button>
          </div>
        </div>

        <div className="right-panel">
          <div className="nep-container">
            <h2 className="nep-title">National Education Policy (NEP)</h2>
            <div className="nep-content">
              <p className="nep-description">
                The National Education Policy (NEP) aims to reform and revamp
                the Indian education system. The policy emphasizes a holistic
                approach, providing equitable access to quality education for
                all, promoting creativity, and fostering research and
                innovation. This is a step towards making India a global
                knowledge superpower.
              </p>

              <ul className="nep-features">
                <li>Flexible curriculum & multidisciplinarity</li>
                <li>Early childhood care and education</li>
                <li>Focus on vocational education</li>
                <li>Promoting digital literacy and technology</li>
                <li>Increased focus on teacher training</li>
              </ul>

              <div className="nep-footer">
                <p className="nep-quote">
                  "Education is the most powerful weapon which you can use to
                  change the world." – Nelson Mandela
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
