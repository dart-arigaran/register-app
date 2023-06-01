import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import { API_KEY_LOGOUT } from "../base";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("token") == "" ||
      localStorage.getItem("token") == null
    ) {
      navigate("/login");
    }
  }, []);

  const logoutAction = () => {
    axios
      .post(
        API_KEY_LOGOUT,
        {},
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((r) => {
        localStorage.clear();
        console.log(r);
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-info justify-content-end">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            LOG <span id="in"> IN</span>
          </Link>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/details">
                Employee_details
              </Link>

              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => logoutAction()}
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Home />
    </div>
  );
}

export default Dashboard;
