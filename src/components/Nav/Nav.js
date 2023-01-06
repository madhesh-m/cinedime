import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../assests/cinephile-removebg-preview.png"

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    //  <div className={`nav ${show && "nav__black"}`}></div>
    <div className={`nav `}>
      <div className="nav__contents">
        <div className="leftContent">
          <Link to="/">
            <img src={logo} alt="" className="nav__logo" />
          </Link>
          <Link to="/Login">
            <p>History</p>
          </Link>
          <Link to="/Login">
            <p>Wishlist</p>
          </Link>
          <Link to="/Login">
            <p>History</p>
          </Link>
        </div>
        <Link to="/Login">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="nav__avatar"
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
