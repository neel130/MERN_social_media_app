import React from 'react'
import Friends from './Friends'
import "../Styles/rightbar.css"

const Rightbar = () => {
  return (
    <>
      <div className="rightbar-container">

        <div className="rb-upper">
          <h5 style={{ marginTop: "25px", marginBottom: "25px", color: "grey" }} >Sponsored</h5>

          <div className="sponsored-box">
            <img src="https://image.shutterstock.com/image-vector/sparkling-water-advertisement-lemons-ice-260nw-1797771574.jpg" alt="" srcset="" />
            <div className="spsrd-description">
              <p style={{ fontWeight: "500" }} >Sammy Hotel</p>
              <p style={{ fontSize: "13px", color: "grey" }} >www.sammyhotel.com</p>
            </div>
          </div>

          <div className="sponsored-box">
            <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202112/tagz-1200-sixteen_nine.jpg?size=948:533" alt="" srcset="" />
            <div className="spsrd-description">
              <p style={{ fontWeight: "500" }} >Tags Foods</p>
              <p style={{ fontSize: "13px", color: "grey" }} >www.youtube.com/tags</p>
            </div>
          </div>

        </div>

        <div className="rb-middle">
          <h5 style={{ margin: "30px 0", color: "grey" }} >Birthdays</h5>
          <div style={{display:"flex"}} >
          <svg style={{marginLeft:"15px"}} xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="green" class="bi bi-gift-fill" viewBox="0 0 16 16">
            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9H2.5z" />
          </svg> <span><p style={{ marginLeft: "20px",marginRight:"15px"}} > <strong>Smita</strong> and <strong>4 others</strong> have their Birthdays today </p> </span>

          </div>
         
        </div>

        <div className="rb-lower">
          <h5 style={{ margin: "30px 0", color: "grey" }} >All Friends</h5>
          <div className="friends-box">
            <Friends friendstatus={"allfriends"} />
          </div>

        </div>


      </div>



    </>
  )
}

export default Rightbar