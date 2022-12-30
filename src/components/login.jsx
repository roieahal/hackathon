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
    <div>
      <div>
        <h1 style={{ fontFamily: "Oregano", fontSize: "100px", marginBottom: "6%" }}>Let's see how far you've come</h1>
      </div>
      <div style={{ width: "25vw", marginInline: "auto" }}>
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
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={handleChange} />
            <label className="form-check-label" for="flexCheckDefault">
              Teacher
            </label>
          </div>
          <div className="loginDiv">
            <button className="btn btn-secondary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
