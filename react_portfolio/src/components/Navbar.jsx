import React from 'react';
import Logo from "../assets/Logo.jpg";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <>
    <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      ></div>
    <nav className="flex items-center justify-between py-6 mb-20">
        <div className="flex items-center flex-shrink-0">
            <img className="w-20 mx-2" src={Logo} alt="logo" />
        </div>
            

          
        <div className="flex items-center justify-center gap-4 m-8 text-4xl">
            <a href='https://linkedin.com/in/rishu-pandey-763581270' target="_blank">
              <FaLinkedin />
            </a>
            <a href='https://github.com/Rishu-89' target="_blank">
              <FaGithub />
            </a>
            <a href='https://x.com/rishu893?t=_17taGanX6jRxbdEuReIGA&s=08' target="_blank">
              <FaSquareXTwitter />
            </a>
            <a href='# 'target="_blank">
              <FaInstagram />
            </a>
        </div>               
    </nav>
  </>
  );
};

export default Navbar;
