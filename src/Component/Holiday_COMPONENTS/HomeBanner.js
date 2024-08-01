import React from 'react'
import "../../ASSETS/STYLES/Holiday_style/Home_Banner.css";

import back from "../../ASSETS/IMAGES/home_banner.jpg";


function Banner() {
  return (

    <div id="hm_hero">
      <div className="hm_background">
        <img src={back} alt="" className='hm_img'/>
      </div>
      <div className="hm_content">
    
        <div className="hm_search">
          <div className="hm_container">
            <label htmlFor="" className='hm_label'>Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className="hm_container">
            <label htmlFor="" className='hm_label'>Check-in</label>
            <input type="date" />
          </div>
          <div className="hm_container">
            <label htmlFor="" className='hm_label'>Check-out</label>
            <input type="date" />
          </div>
          <button className='hm_button'>Explore Now</button>
        </div>
      </div>
    </div>


  )
}

export default Banner
