import React, { useState } from "react";
import "./style/login.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {


  const [loginData,setLoginData]=useState({email:"",password:""});
  let history=useNavigate();

  const onChange=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value});
  }

  const handlesubmit= async(e) =>{
    e.preventDefault();
     // Login API
     const response=await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email:loginData.email,password:loginData.password}), // body data type must match "Content-Type" header
    });

    const json= await response.json();
    if(json.success){
      // add the token
      localStorage.setItem('token',json.authToken);
      props.showAlert("Login Succesful","success");
      history('/');
    }
    else{
      props.showAlert(json.error,"danger");
    }
    // console.log(json)
  }

  return (
    <div className="container d-flex justify-content-center">
      <form className="form card" onSubmit={handlesubmit}>
        <div className="card_header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
            ></path>
          </svg>
          <h1 className="form_heading">Sign in</h1>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Enter your Email"
            id="email"
            value={loginData.email}
            onChange={onChange}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            id="password"
            value={loginData.password}
            onChange={onChange}
          />
        </div>
        <div className="field">
          <button type="submit" className="button">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
