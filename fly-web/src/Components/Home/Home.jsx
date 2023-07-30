import React, { useEffect } from "react";
import video from "../../assets/sky.mp4";
import plane from "../../assets/plane.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          Create Ever-lasting Memories With Us
        </h1>
      </div>

      <div data-aos="fade" data-aos-duration="500" className="homeImages flex">
        <div className="videoDiv">
          <video className="video" src={video} autoPlay muted loop></video>
        </div>
        <img
          data-aos="fade-down-left"
          data-aos-duration="2000"
          className="plane"
          src={plane}
          alt=""
        />
      </div>
    </div>
  );
};
