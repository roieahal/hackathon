import React from "react";
import { Data } from "./context";
import { useContext } from "react";
import "./Nav.css";
import Admin from "./admin";
import User from "./user";
import MyImage from "./logo-progress.png";
import "../App.css";

const Top = () => {
  const { name, setName, isChecked, setIsChecked, setfileNumber, isStudent, setIsStudent } = useContext(Data);

  function handleChange() {
    setIsChecked(false);
    setIsStudent("main");
    setName("");
  }

  return (
    <div className="topDiv">
      <img src={MyImage} style={{ width: "12%" }} />
      <div className="loginDiv" style={{ fontFamily: "Oregano", fontSize: "500" }}>
        <h2> {name}</h2>
      </div>

      <button type="button" className="btn btn-secondary" onClick={() => handleChange()}>
        Logout
      </button>
    </div>
  );
};

export default Top;
