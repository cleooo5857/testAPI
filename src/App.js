import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [email,setemail] = useState();
  const [psw,setpsw] = useState();

  const emailtest = (e) => {
    setemail(e.target.value);
  }

  const pswtest = (e) => {
    setpsw(e.target.value);
  }
  

  const testAPI= () => {
  
    fetch("http://localhost:3001/posts/", {
    method : "POST",
    body : JSON.stringify(email,psw),
    headers: {"Content-Type": "application/json"},
    }).then(response => response.json()).then((json) => console.log(json))
  }

  console.log(email);
  console.log(psw);

  return (
    <div className="App">
      <div>
        <input style={{display:"block"}} type="text" email ={email}  onChange={emailtest} placeholder="아이디"/>
        <input style={{display:"block"}} type="password"  psw ={psw} onChange={pswtest} placeholder="비밀번호"/>
      </div>
      <button onClick={testAPI}>회원가입</button>
    </div>
  );
}

export default App;
