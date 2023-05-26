import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("token") == "" ||
      localStorage.getItem("token") == null
    ) {
      navigate("/");
    }
  }, []);

  const logoutAction = () => {
    axios
      .post(
        "auth/logout",
        {},
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((r) => {
        localStorage.clear();
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            LOG <span id="in"> IN</span>
          </Link>
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
      </nav>
      <Home />
    </div>
  );
}

export default Dashboard;
