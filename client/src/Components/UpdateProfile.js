import React,{useState,useEffect,useContext} from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const {state,dispatch} = useContext(userContext);
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const navigate = useNavigate();
        

    useEffect(()=>{
       if(state) {
          setUsername(state?.username)
          setEmail(state?.email)
       }
    },[state])

    const updateProfile = async () =>{
        console.log("working")
             const response = await fetch(`/user/update/${state?._id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username,
                    email
                })
             })

             const data = await response.json();
             if(data.success){
                localStorage.setItem('user',JSON.stringify(data.user))
                dispatch({type:"UPDATE_PROFILE",payload:data.user})
                navigate('/profile')
             }
    }

  return (
    <>
   
            <div  className="updateprofile-container">
        <div style={{display:"flex",flexDirection:"column"}} className="container">

                <input 
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}
        type="text"  />

        <input 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        type="email" />


        <button onClick={updateProfile} >Update </button>
        </div>
    
    </div>     
   

    
    
    </>
  )
}

export default UpdateProfile