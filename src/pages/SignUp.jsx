import React from "react";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUserSlice } from "../redux/slice/user";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {

    try {
      const res = await dispatch(registerUserSlice(values))
      console.log('resres', res)
    } catch (error) {
      console.log(error)
    }


  //   try {
  //     const res = await axios.post("http://localhost:4000/user", values);
  //     console.log("res", res);
  //     if (res.data.id || res.status === 201) {
  //       alert("User created successfully!");
  //       navigate("/login");
  //     }
  //   } catch (error) {
  //     alert("Enter valid email or password");
  //     console.error(error);
  //   } finally {
  //     setSubmitting(false);
  //   }
  };

  return (
    <div>
      <section className="signin-page account">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center">
                <Link className="logo" to="/">
                  <img src={logo} alt="" />
                </Link>
                <h2 className="text-center">Create Your Account</h2>
                <Formik
                  initialValues={{ name: "", email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, touched, errors }) => (
                    <Form className="text-left clearfix">
                      <div className="form-group">
                        <Field
                          type="text"
                          className={`form-control ${touched.name && errors.name ? 'is-invalid' : touched.name ? 'is-valid' : ''}`}
                          placeholder="Name"
                          name="name"
                        />
                        <ErrorMessage name="name" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                        <Field
                          type="email"
                          className={`form-control ${touched.email && errors.email ? 'is-invalid' : touched.email ? 'is-valid' : ''}`}
                          placeholder="Email"
                          name="email"
                        />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                        <Field
                          type="password"
                          className={`form-control ${touched.password && errors.password ? 'is-invalid' : touched.password ? 'is-valid' : ''}`}
                          placeholder="Password"
                          name="password"
                        />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-main text-center" disabled={isSubmitting}>
                          Sign up
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <p className="mt-20">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
                <p>
                  <Link to="/forget-password">Forgot your password?</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
