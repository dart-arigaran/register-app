import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import axios from "axios";

import { useParams } from "react-router-dom";
import { API_KEY_VIEW_EMPLOYEE } from "../../base";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Model() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(API_KEY_VIEW_EMPLOYEE + id, {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      })
      .then((r) => {
        console.log(r.data);
        setData(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            <Link
              to={`/updateemployee/${data.id}`}
              className="btn btn-outline-info btn-sm"
            >
              Update
            </Link>
            <Link
              to={"/details"}
              className="btn btn-outline-success btn-sm ms-2"
            >
              Back
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
