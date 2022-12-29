import React from "react";
import { Data } from "./context";
import { useContext } from "react";
import "./Nav.css";
import Admin from "./admin";
import User from "./user";
import "../App.css";

const Login = () => {
  const { name, setName, isChecked, setIsChecked, setfileNumber, isStudent, setIsStudent } = useContext(Data);

  function handleChange(event) {
    setIsChecked(true);
    console.log(isChecked);
  }
  function onSubmit(event) {
    isChecked === true ? setIsStudent(false) : setIsStudent(true);
    setName("Hello " + event.target.name.value);
    console.log(name);
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          User name
        </span>
        <input id="name" type="text" className="form-control" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Password
        </span>
        <input className="form-control" type="password" />
      </div>

      <div className="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={handleChange} />
        <label class="form-check-label" for="flexCheckDefault">
          Teacher
        </label>
      </div>
      <div className="loginDiv">
        <button className="btn btn-secondary" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
