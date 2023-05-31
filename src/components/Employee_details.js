import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_KEY_ALL_EMPLOYEE, API_KEY_DELETE_EMPLOYEE } from "../base";
import { Delete_Employee } from "./Pages/Delete-Employee";

function Employee_details() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(API_KEY_ALL_EMPLOYEE, {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      })
      .then((r) => {
        setUser(r.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const Add_Employee_action = () => {
    navigate("/addemployee");
  };
  const Update_Employee_Action = ({
    id,
    name,
    email,
    mobile,
    designation,
    date_of_joining,
    epf_uan,
    esi_number,
    profile_photo,
    date_of_relieving,
  }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("designation", designation);
    localStorage.setItem("date_of_joining", date_of_joining);
    localStorage.setItem("epf_uan", epf_uan);
    localStorage.setItem("esi_number", esi_number);
    localStorage.setItem("profile_photo", profile_photo);
    localStorage.setItem("date_of_relieving", date_of_relieving);
    navigate("/updateemployee");
  };
  const View_Employee_Action = () => {
    navigate("/viewemployee");
  };

  return (
    <div>
      <h1>All Employee Details</h1>
      <button
        className="btn btn-outline-info "
        onClick={() => {
          Add_Employee_action();
        }}
      >
        Add employee
      </button>

      <table className="table  table-primary table-striped  table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Designation</th>
            <th scope="col">D-O-J</th>
            <th scope="col">EPI-Num</th>
            <th scope="col">ESI-Num</th>
            <th scope="col">Photo</th>
            <th scope="col">D-O-R</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>{data.designation}</td>
              <td>{data.date_of_joining}</td>
              <td>{data.epf_uan}</td>
              <td>{data.esi_number}</td>
              <td>{data.profile_photo}</td>
              <td>{data.date_of_relieving}</td>
              <td>
                <div class="d-grid gap-2 d-md-block">
                  <button
                    id="bt"
                    className="btn btn-outline-info btn-sm"
                    onClick={() => {
                      View_Employee_Action();
                    }}
                  >
                    View
                  </button>

                  <button
                    id="bt"
                    className="btn btn-outline-info btn-sm ms-1"
                    onClick={() => {
                      Update_Employee_Action(data);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    id="bt"
                    className="btn btn-outline-danger btn-sm ms-1"
                    onClick={() => {
                      Delete_Employee(data.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee_details;
