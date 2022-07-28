import React from 'react'
import Feed from '../Components/Feed'
import Header from '../Components/Header'
import Leftbar from '../Components/Leftbar'
import Rightbar from '../Components/Rightbar'
import "../Styles/home.css"

const Home = () => {
  return (
    <>
    <Header/>
    <div className="home-container">
      <div className="leftbar">
      <Leftbar/>
      </div>
      <div className="feed">
      <Feed/>
      </div>
      <div className="rightbar">
      <Rightbar/>
      </div>
    </div>
   
    </>
    
  )
}

export default Home