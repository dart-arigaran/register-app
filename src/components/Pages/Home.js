import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
//import Model from "./Model";
function Home() {
  return (
    <div className="home">
      <Link className="nav-link" to="/model">
        Employee_details
      </Link>
      {/* <Button onClick={handleOpen}>Open modal</Button> */};
    </div>
  );
}

export default Home;
