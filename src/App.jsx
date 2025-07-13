import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPass, setCnfPass] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [cnfPassErr, setCnfPassErr] = useState("");

  useEffect(() => {
    if (!email.includes("@") || !email.includes(".") || email.length < 5) {
      setEmailErr("Invalid Email");
    } else {
      setEmailErr("");
    }

    if (password.length < 8) {
      setPassErr("Password must be 8 character");
    } else {
      setPassErr("");
    }

    if (password !== cnfPass) {
      setCnfPassErr("Password do not match");
    } else {
      setCnfPassErr("");
    }
  }, [email, password, cnfPass]);

  function handleSubmit() {
    if (emailErr === "" && passErr === "" && cnfPassErr === "") {
      alert("Form Submitted");
      
    } else {
      alert("Form do not submitted");
    }
  }

  return (
    <div className="container">
      <div>
        <strong>Email: </strong>
        <br />
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <br />
        <p className="error">{emailErr}</p>
      </div>

      <div>
        <strong>Password: </strong>
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <p className="error">{passErr}</p>
      </div>

      <div>
        <strong>Confirm Password: </strong>
        <br />
        <input
          type="password"
          onChange={(e) => setCnfPass(e.target.value)}
        ></input>
        <br />
        <p className="error">{cnfPassErr}</p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
