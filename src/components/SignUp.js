import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {

  const [loginData,setLoginData]=useState({name:"",email:"",password:"",cpassword:""});
  let history=useNavigate();

  const onChange=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value});
  }

  const handlesubmit= async(e) =>{
    e.preventDefault();
     // Login API
     const response=await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name:loginData.name,email:loginData.email,password:loginData.password}), // body data type must match "Content-Type" header
    });

    const json= await response.json();
    if(json.success){
      // add the token
      localStorage.setItem('token',json.authToken);
      history('/');
      props.showAlert("Account Created Succesfull","success");
    }
    else{
      props.showAlert(json.error,"danger")
    }
    console.log(json);
  }
  return (
    <div className="container d-flex justify-content-center">
      <form className="form card" onSubmit={handlesubmit} style={{height:"auto"}}>
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
          <h1 className="form_heading">Sign Up</h1>
        </div>
        <div className="field">
          <label htmlFor="email">Name</label>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Enter your Email"
            id="name"
            value={loginData.name}
            onChange={onChange}
          />
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
            minLength={5}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password">Confirm Password</label>
          <input
            className="input"
            name="cpassword"
            type="password"
            placeholder="Confirm Password"
            id="cpassword"
            value={loginData.cpassword}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="field">
          <button disabled={loginData.password!==loginData.cpassword} type="submit" className="button">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
