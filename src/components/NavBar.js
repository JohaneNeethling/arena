import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavBar.css";
import Logo from "../assets/Arena Logo Brand.jpg";
import CARTNAV from "../assets/CartIcon.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="brand">
        <img src={Logo} alt="ArenaLogo" className="brandLogo" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Mobile Menu */}
      <ul className={menuOpen ? "show-menu" : ""}>
        <li>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/">Welcome</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/menu">Menu</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/booking">BOOKING</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/spa">Spa</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/gallery">Gallery</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cart-class"
          >
            <Link to="/order">Cart</Link>
          </motion.div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
