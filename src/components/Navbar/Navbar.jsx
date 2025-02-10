import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.jpg";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${scrolling ? "scrolled" : ""}`}>
      <h1>Yash Web Solution</h1>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
        <li>
          <button className="btn">Call Us</button>
        </li>
      </ul>
      <img src="https://www.svgrepo.com/show/532203/menu-alt-1.svg" alt="menu-icon" className="menuicon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
