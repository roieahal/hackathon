import { useContext, useState, useEffect } from "react";
import { Data } from "./context";
import UserCom from "./userCom";
import AdminCom from "./adminCom";
import Progressbar from "./progressBar";
import "../App.css";

const Admin = () => {
  const { fileNumber, setfileNumber, adminComments, setadminComments, neededFile, setneededFile, progress, setprogress } = useContext(Data);

  function submitData(ev) {
    ev.preventDefault();
    // console.log(ev.target.name.value);
    // console.log(ev.target.comment.value);
    const newData = ev.target.comment.value;
    const copy = [...adminComments];
    copy.push(newData);
    setadminComments(copy);
    console.log(adminComments);
    ev.target.reset();
  }

  // function setAdminCom() {
  //   console.log(document.getElementById("c").value);

  //   const newData = document.getElementById("c").value;
  //   const copy = [...adminComments];
  //   copy.push(newData);
  //   setadminComments(copy);
  //   console.log(copy);
  // }

  function handleInputChange(event) {
    const newNumber = event.target.value;
    setneededFile(newNumber);
  }

  return (
    <div className="adminComponent">
      <h4 style={{ marginBottom: "25px" }}>Set guidelines</h4>

      <div>
        <input type="number" onChange={handleInputChange} min="1" />
        <p style={{ marginBottom: "25px" }}>The needed file is: {neededFile}</p>
      </div>

      {/* <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Add a Comment
        </span>
        <input id="c" type="text" className="form-control" placeholder="your comment" aria-label="Username" aria-describedby="basic-addon1" maxLength="100" required />
      </div>
      <button className="btn btn-outline-primary" onClick={setAdminCom}>
        Send Comment
      </button> */}

      <form onSubmit={(ev) => submitData(ev)}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Add a Comment
          </span>
          <input id="comment" type="text" className="form-control" placeholder="your comment" aria-label="Username" aria-describedby="basic-addon1" maxLength="100" required />
        </div>
        <div className="loginDiv">
          <button type="submit" className="btn btn-outline-primary">
            Send Comment
          </button>
        </div>
      </form>

      <div>the group have {fileNumber} files in the project </div>
      <p>they finished {progress}% </p>

      <UserCom />
      <AdminCom />
      <Progressbar />
    </div>
  );
};

export default Admin;
