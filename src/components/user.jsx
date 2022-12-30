import { useContext, useState } from "react";
import { Data } from "./context";
import UserCom from "./userCom";
import AdminCom from "./adminCom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../App.css";
import Progressbar from "./progressBar";

const User = () => {
  const { adminComments, userComments, setuserComments, fileNumber, setfileNumber, neededFile, progress, setprogress } = useContext(Data);

  function submitData(ev) {
    ev.preventDefault();
    // console.log(ev.target.name.value);
    // console.log(ev.target.comment.value);
    const newData = { name: ev.target.name.value, comment: ev.target.comment.value };
    userComments.push(newData);
    setuserComments(userComments);
    console.log(userComments);

    numFile(ev);
  }

  function countObjectsInJSON(json) {
    // Parse the JSON string into an object
    const data = JSON.parse(json);

    // Check if the data is an array
    if (Array.isArray(data)) {
      // Return the length of the array
      return data.length;
    } else {
      // If the data is not an array, it must be an object
      // Return 1 because there is only one object
      return 1;
    }
  }

  const numFile = (ev) => {
    const file = ev.target.formFile.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setfileNumber((prevNum) => prevNum + countObjectsInJSON(e.target.result));
    };
    reader.readAsText(file);
  };

  function handleClick() {
    window.open("https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/");
  }

  return (
    <div>
      <div className="userComponent">
        <h4>Fill your information</h4>
        <form onSubmit={(ev) => submitData(ev)}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Editor name
            </span>
            <input id="name" type="text" className="form-control" placeholder="your name" aria-label="Username" aria-describedby="basic-addon1" maxLength="10" required />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Comment
            </span>
            <input id="comment" type="text" className="form-control" placeholder="your comment" aria-label="Username" aria-describedby="basic-addon1" maxLength="100" required />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Add files
            </span>
            <input id="formFile" type="file" className="form-control" placeholder="your file" aria-label="Username" aria-describedby="basic-addon1" required />
          </div>
          <div className="loginDiv">
            <button type="submit" className="btn btn-outline-primary">
              Send information
            </button>
          </div>
        </form>

        <div>The needed file is: {neededFile}</div>

        <div>you have {fileNumber} files in your project </div>
        <p>you finished {progress}% </p>
        {progress >= 100 ? (
          <div>
            <button onClick={handleClick} type="button" className="btn btn-danger">
              Deploy
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      <AdminCom />
      <UserCom />
      <Progressbar />
    </div>
  );
};

export default User;
