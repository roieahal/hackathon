import { useContext, useState } from "react";
import { Data } from "./context";

const AdminCom = () => {
  const { adminComments, setadminComments } = useContext(Data);

  return (
    <div className="adminComComponent">
      <h4>Teacher comments</h4>
      {adminComments.map((val, index) => (
        <ul key={index}>
          <li key={index + 2}>{val}</li>
        </ul>
      ))}
    </div>
  );
};

export default AdminCom;
