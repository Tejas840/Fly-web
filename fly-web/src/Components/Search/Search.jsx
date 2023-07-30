import React, { useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import Aos from "aos";
import "aos/dist/aos.css";

export const Search = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="search container section">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer grid"
      >
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

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="searchInputs flex"
        >
          {/* single */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <SlLocationPin />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where do you want to go ?" />
            </div>
          </div>

          {/* single */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine />
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder="Add Guest" />
            </div>
          </div>

          {/* single */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add Date" />
            </div>
          </div>

          {/* single */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add Date" />
            </div>
          </div>

          <button className="btn btnBlock flex">
            <span>Search Flight</span>
          </button>
        </div>
      </div>
    </div>
  );
};
