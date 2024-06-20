import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../db.json";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.user.find(user => user.email === formData.email && user.password === formData.password);

    if(user)
    {
        navigate('/HomePage')
    }
    else
    {
        setError('Invalid email or password');
    }
  }


  return (
    <>
      <section class="signin-page account">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <div class="block text-center">
                <a class="logo">
                  <img src="images/logo.png" alt="" />
                </a>
                <h2 class="text-center">Welcome Back</h2>
                <form class="text-left clearfix" onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <div class="text-center">
                    <button type="submit" class="btn btn-main text-center">
                      Login
                    </button>
                  </div>
                </form>
                <p class="mt-20">
                  New in this site ?
                  <a> Create New Account</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
