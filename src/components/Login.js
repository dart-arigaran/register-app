import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
//import axios from "axios";
//import { API_KEY_LOGIN } from "../base";
import Loginact from "../redux/action/Action";
import api from "../redux/Api/api";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
    console.log(localStorage.getItem("token"));
  }, []);

  const loginAction = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("auth/login", { email, password });
      const token = response.data;
      localStorage.setItem("token", token);
      dispatch(Loginact(token));
      navigate("/");
      alert("login success");
    } catch (e) {
      console.error("Login failed:", e.message);
      if (e.response.data.errors != undefined) {
        setValidationErrors(e.response.data.errors);
      }
      if (e.response.data.error != undefined) {
        setValidationErrors(e.response.data.error);
      }
    }
  };
  return (
    <div>
      <div className="form">
        <h1 class="h4 text-gray-900 mb-4">LOGIN</h1>
        <form
          onSubmit={(e) => {
            loginAction(e);
          }}
        >
          {Object.keys(validationErrors).length != 0 && (
            <p className="text-center ">
              <small className="text-danger">Incorrect Email or Password</small>
            </p>
          )}
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="exampleInputEmail1" class="col-form-label">
                Email
              </label>
            </div>
            <div class="col-auto">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="col-auto">
              <span class="form-text">
                We'll never share your email with anyone else.
              </span>
            </div>
          </div>
          <br />
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label class="col-form-label">Password</label>
            </div>
            <div class="col-auto">
              <input
                type="password"
                class="form-control"
                placeholder="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div class="col-auto">
              <span id="passwordHelpInline" class="form-text">
                Must be 8-20 characters long.
              </span>
            </div>
          </div>
          <br />
          <button className="btn btn-success  mb-1">Login</button>

          <p className="text-center">
            I Dont have an account <Link to="/register">New User</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
// export default connect(null, { Loginact })(Login);
