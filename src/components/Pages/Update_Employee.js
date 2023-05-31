import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_KEY_UPDATE_EMPLOYEE } from "../../base";

function Update_Employee() {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [designation, setDesignation] = useState();
  const [joining, setJoining] = useState();
  const [epf, setEpf] = useState();
  const [esi, setEsi] = useState();
  const [photo, setPhoto] = useState();
  const [leaving, setLeaving] = useState();

  const Update_emp = async () => {
    // let payload = {
    //   id: id,
    //   name: name,
    //   email: email,
    //   mobile: mobile,
    //   designation: designation,
    //   date_of_joining: joining,
    //   epf_uan: epf,
    //   esi_number: esi,
    //   profile_photo: photo,
    //   date_of_relieving: leaving,
    // };
    await axios.put(`https://apidemo.demodooms.com/api/update/${id}`, {
      // name,
      // email,
      // mobile,
      // designation,
      // joining,
      // epf,
      // esi,
      // photo,
      // leaving,
      id: id,
      name: name,
      email: email,
      mobile: mobile,
      designation: designation,
      date_of_joining: joining,
      epf_uan: epf,
      esi_number: esi,
      profile_photo: photo,
      date_of_relieving: leaving,
    });

    navigate("/details");
  };
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setMobile(localStorage.getItem("mobile"));
    setDesignation(localStorage.getItem("designation"));
    setJoining(localStorage.getItem("date_of_joining"));
    setEpf(localStorage.getItem("epf_uan"));
    setEsi(localStorage.getItem("esi_number"));
    setPhoto(localStorage.getItem("profile_photo"));
    setLeaving(localStorage.getItem("date_of_relieving"));
  }, []);

  return (
    <div>
      <form onSubmit={Update_emp} className="addform">
        <div className="row g-3">
          <h1>Update Employee Details ...</h1>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="name"
              placeholder="Enter Your Name"
              class="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter Your email"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              placeholder="Enter Your mobile no"
              class="form-control"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <input
              type="text"
              placeholder="Enter Your designation"
              class="form-control"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Joining Date</label>
            <input
              type="date"
              placeholder="Enter Your joining date"
              class="form-control"
              value={joining}
              onChange={(e) => setJoining(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">EPF UAN</label>
            <input
              type="number"
              placeholder="Enter Your epf uan"
              class="form-control"
              value={epf}
              onChange={(e) => setEpf(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">ESI Number</label>
            <input
              type="number"
              placeholder="Enter Your esi no"
              class="form-control"
              value={esi}
              onChange={(e) => setEsi(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Photo</label>
            <input
              type="text"
              placeholder="Enter Your photo"
              class="form-control"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Releving Date</label>
            <input
              type="date"
              placeholder="Enter Your relieving"
              class="form-control"
              value={leaving}
              onChange={(e) => setLeaving(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Update_Employee;
