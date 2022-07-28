import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../App'
import Friend from './Friend'


const Friends = ({friendstatus}) => {
  const [users,setUsers] = useState([])
  const{state,dispatch} = useContext(userContext);
  useEffect(()=>{
   const getAllFriends = async()=>{
     const res = await fetch("/user/all/"+state?._id);
     const user = await res.json();
     if(user.success){
         setUsers(user.users)
     }
   }

   const getFollowingFriends = async()=>{
    const res = await fetch("/user/following/"+state?._id);
    const user = await res.json();
    if(user.success){
        setUsers(user.users)
    }
  }

  if(friendstatus==="allfriends"){
       getAllFriends();
  }
  if(friendstatus==="following"){
      getFollowingFriends();
}
  
  },[state])

  return (
    <>
    {
      users.map(user=>{
        return (

         <Link style={{textDecoration:"none",color:"black"}} to={'/profile/'+user._id} > <Friend user={user} /> </Link> 
        )
      })
    }
  
    
    </>
  )
}

export default Friends