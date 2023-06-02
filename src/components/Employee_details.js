import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_KEY_ALL_EMPLOYEE } from "../base";
import { Delete_Employee } from "./Pages/Delete-Employee";
import Model from "./Pages/Model";
// import { Edit_Update } from "./Pages/Update_Employee";
// import { View } from "./Pages/View";

function Employee_details() {
  const [user, setUser] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const record_per_page = 5;
  const lastindex = currentpage * record_per_page;
  const firstinex = lastindex - record_per_page;
  const records = user.slice(firstinex, lastindex);
  const npage = Math.ceil(user.length / record_per_page);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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

  return (
    <div>
      <h1>All Employee Details</h1>
      <button
        className="btn btn-success "
        onClick={() => {
          Add_Employee_action();
        }}
      >
        Add employee +
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
          {records.map((data) => (
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
                  {/* <button onClick={View()}>view</button> */}

                  <Link
                    to={`/viewemployee/${data.id}`}
                    className="btn btn-outline-info btn-sm"
                  >
                    View
                  </Link>
                  <Link
                    to={`/updateemployee/${data.id}`}
                    className="btn btn-outline-info btn-sm"
                  >
                    Update
                  </Link>

                  {/* <button
                    id="bt"
                    className="btn btn-outline-danger btn-sm ms-1"
                    onClick={() => {
                      Edit_Update(data.id);
                    }}
                  >
                    Update
                  </button> */}

                  {/* <button
                    id="bt"
                    className="btn btn-outline-info btn-sm ms-1"
                    onClick={() => {
                      Update_Employee_Action(data);
                    }}
                  >
                    Edit
                  </button> */}

                  <button
                    id="bt"
                    className="btn btn-outline-danger btn-sm ms-1"
                    onClick={() => {
                      Delete_Employee(data.id);
                    }}
                  >
                    Delete
                  </button>
                  <Model />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" onClick={prepage}>
              prev
            </Link>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentpage === n ? "active" : ""}`}
              key={i}
            >
              <Link className="page-link" onClick={() => changeCpage(n)}>
                {n}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link className="page-link" onClick={nextpage}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
  function prepage() {
    if (currentpage !== 1) {
      setCurrentpage(currentpage - 1);
    }
  }
  function changeCpage(id) {
    setCurrentpage(id);
  }
  function nextpage() {
    if (currentpage !== npage) {
      setCurrentpage(currentpage + 1);
    }
  }
}

export default Employee_details;
