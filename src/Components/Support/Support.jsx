import React from 'react'

//Imported Image Assets

import gridImage  from '../../assets/gridImage.png'
const Support = () => {
  return (
    <div className='support container section'>
      <div className="sectionContainer">
        <div className="tittlesDiv">
          <small>Travel Support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find your help with booking and travel plane,
             see what to expect along the journey</p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">
            
            <div className="singleInfo">
              <span className='number'>01</span> 
              <h4>Travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect along
                the journey to your favorite destination
              </p>
            </div>

            <div className="singleInfo colorTwo">
              <span className='number'>02</span> 
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect along
                the journey to your favorite destination
              </p>
            </div>

            <div className="singleInfo">
              <span className='number'>03</span> 
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find help with booking and travel plans, see what to expect along
                the journey to your favorite destination
              </p>
            </div>
          </div>

          <div className="imgDiv">
            <img src={gridImage} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support