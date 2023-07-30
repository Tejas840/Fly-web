import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { BsPhoneVibrate } from "react-icons/bs";
import { SiConsul } from "react-icons/si";
import { AiOutlineGlobal } from "react-icons/ai";
import logo from "../../assets/airFlyIcon.png";

export const Navbar = () => {
  const [active, setActive] = useState("navBarMenu");
  const [nav2bg, setNav2] = useState("navBarTwo");

  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };
  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  // Nav2 BG
  const changeNavBg = () => {
    if (window.scrollY >= 10) {
      setNav2("navBarTwo navTwoBg");
    } else {
      setNav2("navBarTwo");
    }
  };
  window.addEventListener("scroll", changeNavBg);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={nav2bg}>
        <div className="logoDiv">
          <img src={logo} alt="" className="logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              Home
            </li>
            <li onClick={removeNavBar} className="listItem">
              About
            </li>
            <li onClick={removeNavBar} className="listItem">
              Offers
            </li>
            <li onClick={removeNavBar} className="listItem">
              Seats
            </li>
            <li onClick={removeNavBar} className="listItem">
              Destinations
            </li>
          </ul>
          <button onClick={removeNavBar} className="btn flex btnOne">
            Contact
          </button>
        </div>

        <button className="btn flex btnTwo">Contact</button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};
