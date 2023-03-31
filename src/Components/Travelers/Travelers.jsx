import React from "react";
import { travelersData } from "../../data/moctData";

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
         
          {travelersData.map((item) => {
            return (
              
              <div key={item.id} className="singleTraveler">
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
