import React from 'react'
import "../Styles/friends.css"

const Friend = ({user}) => {
  return (
    <>
    <div className="friends-container">
        <img src={user.profilePic} alt="" srcset="" />
        <p style={{fontWeight:"500",marginLeft:"15px",textDecoration:"none"}} >{user.username}</p>
    </div>
    
    </>
  )
}

export default Friend