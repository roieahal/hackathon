import { createContext, useState, useEffect } from "react";

export const Data = createContext();

function Dataprovider({ children }) {
  const [fileNumber, setfileNumber] = useState(0);

  const [neededFile, setneededFile] = useState(20);

  const [progress, setprogress] = useState(0);

  const [userComments, setuserComments] = useState([]);

  const [adminComments, setadminComments] = useState([]);

  const [isStudent, setIsStudent] = useState("main"); //change

  const [isChecked, setIsChecked] = useState(false); //change

  const[name,setName]=useState('')//change

  useEffect(() => {
    setprogress(Math.round((fileNumber / neededFile) * 100) + "%");
  }, [fileNumber, neededFile]);

  return <Data.Provider value={{ name,setName,isChecked, setIsChecked, isStudent, setIsStudent, fileNumber, setfileNumber, userComments, setuserComments, neededFile, setneededFile, progress, setprogress, adminComments, setadminComments }}>{children}</Data.Provider>;
}
export default Dataprovider;
