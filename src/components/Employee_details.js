import axios from "axios";
import React, { useEffect, useState } from "react";

function Employee_details() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://apidemo.demodooms.com/api/employees", {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      })
      .then((r) => {
        setUser(r.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <table className="table  table-primary table-striped  table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Designation</th>
            <th scope="col">D-O-J</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee_details;
