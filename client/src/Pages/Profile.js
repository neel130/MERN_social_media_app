import React,{useContext} from 'react'
import "../Styles/profile.css"
import Header from "../Components/Header"
import Leftbar from "../Components/Leftbar"
import Friends from '../Components/Friends'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'
import Feed from '../Components/Feed'

const Profile = () => {
  const {state,dispatch}= useContext(userContext);
  const navigate = useNavigate();

  const logOut =()=>{
    localStorage.clear();
    dispatch({type:"LOGOUT"})
    navigate('/login')
  }

  

  return (
    <> 
     <Header/>
    <div className="profile-container">
  

    <div className="leftbar-sec">
    <Leftbar/>
    </div>

    <div className="rightbar-sec">

      <div className="rightbar-sec-top">
        <div className="cover-image">
          <img src="https://marketplace.canva.com/EAEvZ3NDFto/1/0/1600w/canva-blush-wave-linkedin-banner-nuNmg4S1vq8.jpg" alt="" srcset="" />
        </div>

        <div className="profile-image-sec">
          <div className="img-border">
          <img src={state?.profilePic?state?.profilePic:"https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"} alt="" />
          </div>
             <h2 style={{margin:"auto",color:"#747171"}} >{state?.username}</h2>
        </div>
      
      </div>
      <div className="rightbar-sec-bottom">

        <div className="feed-sec">
        <Feed/>
        </div>
        <div className="userinfo-sec">

        <button onClick={logOut} type="button" class="btn btn-danger">Log Out</button>

          <h5 style={{color:"#747171",marginTop:"20px"}} >User information</h5>
           <div className="info-box">
            <p>City : London</p>
            <p>From : UK</p>
            <p>Relation : Single</p>
           </div>

           <div style={{marginTop:"25px",marginBottom:"15px"}} className="friends-sec">
           <h5 style={{color:"#747171",marginTop:"20px",marginBottom:"25px"}} >User Followings</h5>
            <Friends friendstatus={"following"} />
           </div>
        </div>
       
      </div>

    </div>
   

    </div>
  
    </>
  )
}

export default Profile