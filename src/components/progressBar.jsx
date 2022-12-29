import React from "react";
import { Data } from "./context";
import { useContext } from "react";
import "./Nav.css";

const Progressbar = () => {
  const { progress, fileNumber, setfileNumber, comments, setcomments, neededFile, setneededFile } = useContext(Data);

  return (
    <div className="progressBarComponent">
      <progress id="file" animated max={neededFile} value={fileNumber}></progress>
      <p> {progress}</p>
    </div>
  );
};

export default Progressbar;
