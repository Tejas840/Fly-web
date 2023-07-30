import React from "react";
import loungeImg from "../../assets/lounge.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const Lounge = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
          <img src={loungeImg} alt="" />
        </div>
        <div data-aos="fade-down" data-aos-duration="2500" className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">
            {/* single */}
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Help through the airpot</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            {/* single */}
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            {/* single */}
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Care on the Flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            {/* single */}
            <div
              data-aos="fade-down"
              data-aos-duration="2500"
              className="singleGrid"
            >
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
