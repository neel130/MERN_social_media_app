import React,{useState,useEffect, useContext} from 'react'
import "../Styles/login.css"
import { Link,useNavigate } from 'react-router-dom'
import { userContext } from '../App';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("")
  const navigate = useNavigate();
  const {state,dispatch} = useContext(userContext)


    const logIn = async (e)=>{
      e.preventDefault();
      const res = await fetch('/auth/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email,
          password
        })
      })
      const data = await res.json();
      if(data.success){
         localStorage.setItem("user",JSON.stringify(data.user))
         dispatch({type:"USER",payload:data.user})
         navigate('/');
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
         <p style={{position:"absolute",top:"120px",color:'red'}} >{error.error}</p>
         :
         <p style={{position:"absolute",top:"120px",color:'green'}} >{error.success}</p>

          }

      
         <div className="login-form-sec">
         <form>
  <div style={{marginBottom:"15px"}} class="mb-3">
    <input 
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
     type="email" placeholder='Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <input
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
     type="password" placeholder='Password' class="form-control" id="exampleInputPassword1"/>
  </div>

 <div className="login-btn">
   <button
   onClick={logIn}
    style={{width:"100%",background:"#0597c4",border:"none",height:"45px"}} type="submit" class="btn btn-primary">Log In</button>
    </div> 
<div style={{display:"flex",justifyContent:"center"}} className="forgate-pwd">
<p style={{color:"#0597c4",margin:"20px 0"}} >Forgate Password?</p>
</div>

<div style={{display:"flex",justifyContent:"center",marginBottom:"6px"}} className="create-new-account-btn">
  <Link to="/register" > <button style={{background:"#0bb724",borderRadius:"8px",border:"none",height:"50px"}} type="submit" class="btn btn-success">Create a New Account</button> </Link> 
    </div> 
   
</form>
         </div>
     </div>

    </div>
    
    
    </>
  )
}

export default Login