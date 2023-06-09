import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_KEY_ADD_EMPLOYEE } from "../../base";

function Add_Employee() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [designation, setDesignation] = useState();
  const [joining, setJoining] = useState();
  const [epf, setEpf] = useState();
  const [esi, setEsi] = useState();
  const [photo, setPhoto] = useState();
  const [leaving, setLeaving] = useState();

  const addemployee = (e) => {
    e.preventDefault();
    let payload = {
      name: name,
      email: email,
      mobile: mobile,
      designation: designation,
      date_of_joining: joining,
      epf_uan: epf,
      esi_number: esi,
      profile_photo: photo,
      date_of_relieving: leaving,
    };

    axios
      .post(API_KEY_ADD_EMPLOYEE, payload, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => console.log(res.data), navigate("/details"))
      .catch((err) => console.log(err));
  };

  return (
    <div id="addform">
      <form onSubmit={addemployee} className="addform">
        <div className="row g-3">
          <h1>ADD Employee Details ...</h1>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="name"
              placeholder="Enter Your Name"
              class="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter Your email"
              class="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              placeholder="Enter Your mobile no"
              class="form-control"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <input
              type="text"
              placeholder="Enter Your designation"
              class="form-control"
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Joining Date</label>
            <input
              type="date"
              placeholder="Enter Your joining date"
              class="form-control"
              onChange={(e) => setJoining(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">EPF UAN</label>
            <input
              type="number"
              placeholder="Enter Your epf uan"
              class="form-control"
              onChange={(e) => setEpf(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">ESI Number</label>
            <input
              type="number"
              placeholder="Enter Your esi no"
              class="form-control"
              onChange={(e) => setEsi(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Photo</label>
            <input
              type="text"
              placeholder="Enter Your photo"
              class="form-control"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Releving Date</label>
            <input
              type="date"
              placeholder="Enter Your relieving"
              class="form-control"
              onChange={(e) => setLeaving(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-outline-success">
              Submit
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

export default Add_Employee;
