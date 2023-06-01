import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY_LOGIN } from "../base";

function Login() {
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
    setValidationErrors({});
    e.preventDefault();
    let payload = {
      email: email,
      password: password,
    };
    await axios
      .post(API_KEY_LOGIN, payload)
      .then((r) => {
        localStorage.setItem("token", r.data);
        navigate("/");
        alert("successfully login");
      })

      .catch((e) => {
        if (e.response.data.errors != undefined) {
          setValidationErrors(e.response.data.errors);
        }
        if (e.response.data.error != undefined) {
          setValidationErrors(e.response.data.error);
        }
      });
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
          <button type="button" class="btn btn-primary" id="liveToastBtn">
            Show live toast
          </button>

          <div class="position-fixed bottom-0 end-0 p-3">
            <div
              id="liveToast"
              class="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="toast-header">
                <img src="..." class="rounded me-2" alt="..." />
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div class="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>

          <p className="text-center">
            I Dont have an account <Link to="/register">New User</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
