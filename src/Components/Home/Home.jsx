import React, {useEffect} from 'react'

// import assets
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeoff.png'
import icons from '../../assets/742751.png'
import title_icon from '../../assets/title_icon.png'
//Import AOS

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    Aos.init({duration:3000}) 
  },[])


  return (
    <div className='home flex container'>
      
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500' >Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={aeroplane} className='plane' />
      </div>
    </div>
  )
}

export default Home