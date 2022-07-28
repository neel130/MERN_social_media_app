import React,{useContext, useEffect, useState} from 'react'
import "../Styles/profile.css"
import Header from "../Components/Header"
import Leftbar from "../Components/Leftbar"
import Friends from '../Components/Friends'
import { userContext } from '../App'
import { useNavigate,useParams } from 'react-router-dom'
import Feed from '../Components/Feed'

const UserProfile = () => {
    const {state,dispatch}= useContext(userContext);
    const navigate = useNavigate();
    const userid = useParams().id;
    const [UserProfile,setUserProfile] = useState({})
    const [chng,setChng] = useState(0)


    useEffect(()=>{
      const getUserProfile = async () =>{
        const res = await fetch(`/user/${userid}`);
        const user = await res.json();
        setUserProfile(user.user)
      } 
     getUserProfile();
    },[userid,chng])



    const followUser = async()=>{
      const res = await fetch(`/user/follow/${state?._id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            userid:UserProfile._id
          })
      });
      const data = await res.json();
      setChng(chng+1)
    }

    const unfollowUser = async()=>{
      const res = await fetch(`/user/unfollow/${state?._id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            userid:UserProfile._id
          })
      });
      const data = await res.json();
      setChng(chng-1)
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
          <img src={UserProfile?.profilePic?UserProfile?.profilePic:"https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"} alt="" />
          </div>
             <h2 style={{margin:"auto",color:"#747171"}} >{UserProfile.username}</h2>
        </div>
      
      </div>
      <div className="rightbar-sec-bottom">

        <div className="feed-sec">
        <Feed userprofile={true} />
        </div>
        <div className="userinfo-sec">
       
       {
        UserProfile.followers?.includes(state?._id)  ?
        <button onClick={unfollowUser}  type="button" class="btn btn-primary"> UnFollow User</button> 
        :
        <button onClick={followUser}  type="button" class="btn btn-primary">+ Follow User</button>
        
       }

       

          <h5 style={{color:"#747171",marginTop:"20px"}} >User information</h5>
           <div className="info-box">
            <p>City : London</p>
            <p>From : UK</p>
            <p>Relation : Single</p>
           </div>

           <div style={{marginTop:"25px",marginBottom:"15px"}} className="friends-sec">
           <h5 style={{color:"#747171",marginTop:"20px",marginBottom:"25px"}} >User Followings</h5>
            <Friends friendstatus={"allfriends"} />
           </div>
        </div>
       
      </div>

    </div>
   

    </div>
  
    </>
  )
}

export default UserProfile