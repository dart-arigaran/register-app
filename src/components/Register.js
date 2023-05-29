import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_KEY_REGISTER } from "../base";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("token") == "" &&
      localStorage.getItem("token") == null
    ) {
      navigate("/");
    }
  }, []);

  const registerAction = async (e) => {
    e.preventDefault();

    let payload = {
      name: name,
      email: email,
      password: password,
    };
    try {
      await axios.post(API_KEY_REGISTER, payload).then((r) => {
        localStorage.setItem("token", r.data);
        console.log(r.data);
        alert("successfully register");
        navigate("/");
      });
    } catch (error) {
      console.error(error.r.data);
    }
  };

  return (
    <div className="form">
      <h1 class="h4 text-gray-900 mb-4">Create a New User</h1>
      <form
        onSubmit={(e) => {
          registerAction(e);
        }}
      >
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="name" class="col-form-label">
              Name
            </label>
          </div>
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div class="col-auto form-text" id="passwordHelpInline">
            Must be Capital letter.
          </div>
        </div>
        <br />
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
            <label for="inputPassword6" class="col-form-label">
              Password
            </label>
          </div>
          <div class="col-auto">
            <input
              type="password"
              class="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
        <br />
        <button className="btn btn-success  mb-1">Create Account</button>
        <p className="text-center">
          Have already an account <Link to="/">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
