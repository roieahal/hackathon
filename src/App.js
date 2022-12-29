import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Admin from "./components/admin";
import User from "./components/user";
import { useContext } from "react";
import { Data } from "./components/context";
import Top from "./components/header";

function App() {
  const { isChecked, setIsChecked, setfileNumber, isStudent, setIsStudent } = useContext(Data);
  return (
    <div className="App">
      <Top />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {isStudent === "main" ? <Login /> : ""}

        {isStudent === true ? <User /> : isStudent === false ? <Admin /> : ""}
      </div>
    </div>
  );
}

export default App;
