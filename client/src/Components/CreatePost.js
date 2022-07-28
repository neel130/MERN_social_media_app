import React, { useContext, useState } from 'react'
import { userContext } from '../App'
import "../Styles/createpost.css"

const CreatePost = ({newData}) => {
    const { state, dispatch } = useContext(userContext);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('')
    

   const subData = async ()=>{
     const res = await fetch('/post/create',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title,
            description,
            image,
            postedBy:state?._id
        })
     })
     const data = await res.json();
     if(data.success){
       newData(data.post)
     }
   }


    return (
        <>
            <div className="createpost-container">

                <div className="cp-upper">
                    <img src={state?.profilePic ? state?.profilePic : "https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg"}
                        alt="" srcset="" />
                    <input data-bs-toggle="modal" data-bs-target="#exampleModal" type="text" placeholder={`What's on your mind, ${state?.username}?`} />
                </div>

                <hr style={{ color: "gray" }} />

                <div className="cp-lower ">

                    <div className="photo-icon cp-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="red" class="bi bi-images" viewBox="0 0 16 16">
                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                        </svg><span>Photo/Video</span>
                    </div>

                    <div className="tag-icon cp-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="blue" class="bi bi-tags-fill" viewBox="0 0 16 16">
                            <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                        </svg> <span>Tag</span>
                    </div>

                    <div className="location-icon cp-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="green" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg> <span>Location</span>
                    </div>

                    <div className="feelings-icon cp-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="orange" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                        </svg> <span>Feelings</span>
                    </div>


                    <button style={{ float: "right" }} >Share</button>

                </div>

            </div>


            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Share your post</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                         
                                    <input 
                                    value={title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                    type="text" class="form-control" placeholder='Enter post title'/>
                                  
                                </div>
                                <div class="mb-3">
                                  
                                    <input 
                                    value={description}
                                    onChange={(e)=>setDescription(e.target.value)}
                                    type="text" class="form-control" placeholder='Enter post description' />
                                </div>

                                <div class="mb-3">
                                  
                                  <input 
                                  value={image}
                                  onChange={(e)=>setImage(e.target.value)}
                                  type="text" class="form-control" placeholder='Share Img URL' />
                              </div>

                               
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" >Close</button>
                            <button onClick={subData} type="button" data-bs-dismiss="modal" class="btn btn-primary">Share Post</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreatePost