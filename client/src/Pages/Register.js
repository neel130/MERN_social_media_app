import React, { useState, useEffect, useContext } from 'react'
import "../Styles/register.css"
import { Link,useNavigate } from "react-router-dom"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  console.log(username,email,phone,password)
  const register = async (e) => {
    e.preventDefault();
    const res = await fetch('/auth/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password,
        phone
      })
    })

    const data = await res.json();
    if(data.success){
      navigate('/login');
   }
    setError(data)
    console.log(data)
  }


  return (
    <>

      <div className="login-container">

        <div className="login-left">
          <div className="login-intro">
            <h2>Neelsocial</h2>
            <p>Connect with friends and the world around you on Neelsocial </p>
          </div>

        </div>

        <div className="login-right">


          {error.error ?
            <p style={{ position: "absolute", top: "100px", color: 'red' }} >{error.error}</p>
            :
            <p style={{ position: "absolute", top: "100px", color: 'green' }} >{error.success}</p>

          }
          <div className="register-form-sec">
            <form>

              <div style={{ marginBottom: "15px" }} class="mb-3">
                <input onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Username' class="form-control" />
              </div>

              <div style={{ marginBottom: "15px" }} class="mb-3">
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div style={{ marginBottom: "15px" }} class="mb-3">
                <input onChange={(e) => { setPhone(e.target.value) }} type="number" placeholder='Phone' class="form-control" />
              </div>

              <div class="mb-3">
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' class="form-control" id="exampleInputPassword1" />
              </div>

              <div className="login-btn">
                <button
                  onClick={register}
                  style={{ width: "100%", background: "#0597c4", border: "none", height: "45px" }} type="submit" class="btn btn-primary">Sign Up</button>
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "6px", marginTop: "20px" }} className="create-new-account-btn">
                <Link to='/login' > <button style={{ background: "#0bb724", borderRadius: "8px", border: "none", height: "50px" }} type="submit" class="btn btn-success">Log into Account</button> </Link>
              </div>

            </form>
          </div>
        </div>

      </div>


    </>
  )
}

export default Register