import { useContext, useState } from "react";
import { Data } from "./context";

const UserCom = () => {
  const { userComments, setuserComments } = useContext(Data);

  return (
    <div className="userComComponent">
      <h4>Group comments </h4>
      <div>
        {userComments.map((val, index) => (
          <div>
            <p key={index + 1}>{val.name}</p>
            <ul key={index}>
              <li key={index + 2}>{val.comment}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCom;
