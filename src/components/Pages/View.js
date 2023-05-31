import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_KEY_VIEW_EMPLOYEE } from "../../base";

function View() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API_KEY_VIEW_EMPLOYEE + id, {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      })
      .then((r) => {
        setData(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <h1>View</h1>
      <p>Id : {data.id}</p>
      <p>Name : {data.name}</p>
      <p>Email : {data.email}</p>
      <p>Designation : {data.designation}</p>
      <p>D.O J : {data.date_of_joining}</p>
      <p>EPF.No : {data.epf_uan}</p>
      <p>ESI No : {data.esi_number}</p>
      <p> Photo : {data.profile_photo} </p>
      <p>D.O.R : {data.date_of_relieving}</p>
      <Link to={"/updateemployee"} className="btn btn-outline-info btn-sm">
        Edit
      </Link>
      <Link to={"/details"} className="btn btn-outline-success btn-sm ms-2">
        Back
      </Link>
    </div>
  );
}

export default View;
