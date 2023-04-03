import React, {useEffect} from "react";
import { travelersData } from "../../data/moctData";

//Import AOS

import Aos from 'aos';
import 'aos/dist/aos.css';

const Travelers = () => {
  useEffect(() => {
    Aos.init({duration:3000}) 
  },[])

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
         
          {travelersData.map((item) => {
            return (
              <div key={item.id} data-aos='fade-up' data-aos-duration='2500' className="singleTraveler">
                <img src={item.destinationImage} className="destinationImage" />

                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={item.travelerImage} className="travelerImage" />
                  </div>
                  <div className="travelerName">
                    <span>{item.travelerName}</span>
                    <p>{item.socialLink}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
