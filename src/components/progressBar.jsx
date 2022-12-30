import React from "react";
import { Data } from "./context";
import { useContext } from "react";
import "./Nav.css";

const Progressbar = () => {
  const { progress, fileNumber, setfileNumber, comments, setcomments, neededFile, setneededFile } = useContext(Data);

  return (
    <div className="progressBarComponent">
      <div className="progressBarComponent">
        <progress id="file" max={neededFile} value={fileNumber}></progress>
        <p> {progress}</p>
      </div>
    </div>
  );
};

export default Progressbar;

{
  /* <div className="progress" style={{ transform: "rotate(90deg)" }}>
  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    {progress}
  </div>
</div> */
}
