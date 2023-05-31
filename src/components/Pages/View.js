import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_KEY_VIEW_EMPLOYEE } from "../../base";

function View() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(API_KEY_VIEW_EMPLOYEE + id, {
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
      <h1>view</h1>
      {user.id}
      {user.name}
      {user.email}
      {user.mobile}
    </div>
  );
}

export default View;
