import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_KEY_ALL_EMPLOYEE, API_KEY_DELETE_EMPLOYEE } from "../base";

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
  const Delete_employee = (id) => {
    axios
      .delete(API_KEY_DELETE_EMPLOYEE + id, {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      })
      .then((r) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
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
          {user.map((v) => (
            <tr>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.email}</td>
              <td>{v.mobile}</td>
              <td>{v.designation}</td>
              <td>{v.date_of_joining}</td>
              <td>{v.epf_uan}</td>
              <td>{v.esi_number}</td>
              <td>{v.profile_photo}</td>
              <td>{v.date_of_relieving}</td>
              <td>
                <div class="d-grid gap-2 d-md-block">
                  <button id="bt" className="btn btn-outline-primary btn-sm">
                    View
                  </button>

                  <button id="bt" className="btn btn-outline-info btn-sm">
                    Edit
                  </button>

                  <button
                    id="bt"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      Delete_employee(v.id);
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
