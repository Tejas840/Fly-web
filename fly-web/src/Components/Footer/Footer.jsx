import React from "react";
import logo from "../../assets/airFlyIcon.png";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

export const Footer = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer container grid"
      >
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="Logo" alt="" />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
            <a href="">Explore</a>
            <a href="">Flight Status</a>
            <a href="">Travel</a>
            <a href="">Check-In</a>
            <a href="">Manage your booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
            <a href="">How to</a>
            <a href="">Flight Status</a>
            <a href="">Features</a>
            <a href="">Baggage</a>
            <a href="">Route Map</a>
            <a href="">Our communities</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
            <a href="">Explore</a>
            <a href="">Flight Status</a>
            <a href="">Travel</a>
            <a href="">Check-In</a>
            <a href="">Manage your booking</a>
          </li>
        </div>
      </div>
      <p>created by Tejas Shelke </p>
    </div>
  );
};
