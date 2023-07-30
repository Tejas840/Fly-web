import React from "react";
import paris from "../../assets/paris.jpg";
import person1 from "../../assets/person1.jpg";
import london from "../../assets/london.jpg";
import person2 from "../../assets/person2.jpg";
import newYork from "../../assets/newYork.jpg";
import person3 from "../../assets/person3.jpg";
import dubai from "../../assets/dubai.jpg";
import person4 from "../../assets/person4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const travelersData = [
  {
    id: 1,
    loactionImg: paris,
    person: person1,
    name: "IsraTech",
    social: "@isratech8",
  },
  {
    id: 2,
    loactionImg: london,
    person: person2,
    name: "IsraTech",
    social: "@isratech8",
  },
  {
    id: 3,
    loactionImg: newYork,
    person: person3,
    name: "IsraTech",
    social: "@isratech8",
  },
  {
    id: 4,
    loactionImg: dubai,
    person: person4,
    name: "IsraTech",
    social: "@isratech8",
  },
];

export const Travelers = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">
          Top travelers of this month !
        </h2>

        <div className="travelersContainer grid">
          {/* <div className="singleTraveler">
            <img src={paris} alt="" className="destinationImage" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={person1} className="travelerImage" />
              </div>
              <div className="travelerName">
                <span>IsraTech</span>
                <p>@isratech8</p>
              </div>
            </div>
          </div> */}

          {travelersData.map((item) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2500"
                key={item.id}
                className="singleTraveler"
              >
                <img
                  src={item.loactionImg}
                  alt=""
                  className="destinationImage"
                />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={item.person} className="travelerImage" />
                  </div>
                  <div className="travelerName">
                    <span>{item.name}</span>
                    <p>{item.social}</p>
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
