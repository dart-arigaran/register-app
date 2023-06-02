import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_KEY_UPDATE_EMPLOYEE, API_KEY_VIEW_EMPLOYEE } from "../../base";

function Update_Employee() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputData, setInputData] = useState({
    id: id,
    name: " ",
    email: " ",
    mobile: " ",
    designation: " ",
    date_of_joining: " ",
    epf_uan: " ",
    esi_number: " ",
    profile_photo: " ",
    date_of_relieving: " ",
  });

  useEffect(() => {
    axios
      .get(API_KEY_VIEW_EMPLOYEE + id, {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      })
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const UpdateinputData = () => {
    console.log(id);
    const updateValue = {
      name: inputData.name,
      email: inputData.email,
      mobile: inputData.mobile,
      designation: inputData.designation,
      date_of_joining: inputData.date_of_joining,
      epf_uan: inputData.epf_uan,
      esi_number: inputData.esi_number,
      profile_photo: inputData.profile_photo,
      date_of_relieving: inputData.date_of_relieving,
    };
    axios
      .put(API_KEY_UPDATE_EMPLOYEE + id, updateValue, {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      })
      .then(() => {
        alert("inputData updated succefuly");
        navigate("/details");
      });
  };

  return (
    <div>
      <form className="addform">
        <div className="row g-3">
          <h1>Update Employee Details ...</h1>
          <div className="col-md-6">
            <label className="form-label">Id</label>
            <input
              disabled
              type="number"
              class="form-control"
              value={inputData.id}
            />
            <label className="form-label">Name</label>
            <input
              type="name"
              class="form-control"
              placeholder="Enter Your Name"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter Your email"
              class="form-control"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              placeholder="Enter Your mobile no"
              class="form-control"
              value={inputData.mobile}
              onChange={(e) =>
                setInputData({ ...inputData, mobile: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <input
              type="text"
              placeholder="Enter Your designation"
              class="form-control"
              value={inputData.designation}
              onChange={(e) =>
                setInputData({ ...inputData, designation: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Joining Date</label>
            <input
              type="date"
              placeholder="Enter Your joining date"
              class="form-control"
              value={inputData.date_of_joining}
              onChange={(e) =>
                setInputData({ ...inputData, joining: e.target.value })
              }
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">EPF UAN</label>
            <input
              type="number"
              placeholder="Enter Your epf uan"
              class="form-control"
              value={inputData.epf_uan}
              onChange={(e) =>
                setInputData({ ...inputData, epf: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">ESI Number</label>
            <input
              type="number"
              placeholder="Enter Your esi no"
              class="form-control"
              value={inputData.esi_number}
              onChange={(e) =>
                setInputData({ ...inputData, esi: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Photo</label>
            <input
              type="text"
              placeholder="Enter Your photo"
              class="form-control"
              value={inputData.profile_photo}
              onChange={(e) =>
                setInputData({ ...inputData, photo: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Releving Date</label>
            <input
              type="date"
              placeholder="Enter Your relieving"
              class="form-control"
              value={inputData.date_of_relieving}
              onChange={(e) =>
                setInputData({ ...inputData, leaving: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={UpdateinputData}
            >
              Update
            </button>
            <Link to={"/details"} className="btn btn-outline-info ms-4">
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Update_Employee;
