import React,{useState,useEffect,useContext} from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import "../Styles/feed.css"

const Feed = ({userprofile}) => {
  const [post,setPost] = useState([])
  const [data,setData] = useState({})


  const newData = (data) =>{
    setData(data)
  }

  useEffect(()=>{
    const getPost = async ()=>{
      const res = await fetch("/post")
      const data = await res.json();
      setPost(data.posts)
    }
   getPost();
  },[data])




  return (
    <>
    <div className="feed-container">
      <div className="createpost">
        {
          userprofile===true ? null :   <CreatePost newData ={newData} />
        }
  
    </div>
    
    <div className="post">
      {
        post.map(elem=>{

          return  <Post post={elem} changedata={newData} />

        })
      }

    </div>
    </div>
    
    
   </>
  )
}

export default Feed