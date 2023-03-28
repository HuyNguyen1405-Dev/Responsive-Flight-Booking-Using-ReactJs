import React from 'react'

//Imported Icons ======>

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import { RxCalendar } from 'react-icons/rx'
const Search = () => {
  return (
    <div className='search container section'>
      <div className="sectionContainer gird">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>

          <div className="singleBtn">
            <span>Business Class</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div className="searchInputs flex">
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon' /> 
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Where do you want to go?'/>
            </div>
          </div>
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon' /> 
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder='Add guests'/>
            </div>
          </div>
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon' /> 
            </div>
            <div className="texts">
              <h4>Check in</h4>
              <input type="text" placeholder='Add date'/>
            </div>
          </div>
          
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon' /> 
            </div>
            <div className="texts">
              <h4>Check out</h4>
              <input type="text" placeholder='Add date'/>
            </div>
          </div>

          <button className='btn btnBlock flex'>Search Flight</button>
        </div>
      </div>
    </div>
  )
}

export default Search