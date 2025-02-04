import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="footer-text">
        Arena Restaurant | 48 Main Road, Bonnievale | 2025
      </p>
      <div className="footer-contact">
        <motion.a
          href="tel:+27797903741"
          className="footer-links"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
            alt="Phone Icon"
            className="footer-icon"
            whileHover={{ filter: "brightness(1.2)" }}
          />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/profile.php?id=61551078607878"
          className="footer-links"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="Facebook Icon"
            className="footer-icon"
            whileHover={{ filter: "brightness(1.2)" }}
          />
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;
