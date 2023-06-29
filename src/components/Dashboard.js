import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API_KEY_LOGOUT } from "../base";
import { useDispatch } from "react-redux";
import { Logout } from "../redux/action/Action";

function Dashboard() {
  const dispatch = useDispatch();
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
    console.log("logout");
    navigate("/login");
    dispatch(Logout());
  };

  // const logoutAction = () => {
  //   axios
  //     .post(
  //       API_KEY_LOGOUT,
  //       {},
  //       {
  //         headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  //       }
  //     )
  //     .then((r) => {
  //       localStorage.clear();
  //       console.log(r);
  //       navigate("/login");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <div>
      {localStorage.getItem("token") ? (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-info justify-content-end">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
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
      ) : (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-info justify-content-end">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              LOG <span id="in"> IN</span>
            </Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/login"}
                >
                  sign in
                </Link>
                <Link className="nav-link" to={"/register"}>
                  sign up
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Dashboard;
