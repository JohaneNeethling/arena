import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ArenaPic1 from "../assets/arena5.jpg";
import ArenaPic2 from "../assets/arena4.jpg";
import ArenaPic3 from "../assets/lounge1.jpg";
import ArenaPic4 from "../assets/arena1.jpg";
import ArenaPic5 from "../assets/lounge2.jpg";
import ArenaPic6 from "../assets/arena7.jpg";
import ArenaPic7 from "../assets/arena3.jpg";
import ArenaLogo2 from "../assets/spalogo.jpg";
import ArenaLogo3 from "../assets/EVENT1.jpg";
import WeeklySpecials from "../assets/specialsarena.jpg";

export function Home() {
  const [dishes] = useState([
    { id: 1, imageUrl: ArenaPic2 },
    { id: 2, imageUrl: ArenaPic3 },
    { id: 3, imageUrl: ArenaPic4 },
    { id: 4, imageUrl: ArenaPic5 },
    { id: 5, imageUrl: ArenaPic6 },
    { id: 6, imageUrl: ArenaPic7 },
  ]);

  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="welcome-tag"> WELCOME TO</p>
        <p className="arenaTag">ARENA</p>
        <p className="restau-tag"> RESTAURANT</p>
        <button className="cta-btn" onClick={() => navigate("/menu")}>
          ORDER A MEAL
        </button>
      </motion.section>

      {/* Featured Images */}
      <motion.section
        className="featured-images"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="featuredLine">
          |RESTAURANT| |LOUNGE&BAR| |PARTIES| |SPA|
        </p>

        {/* Flex Container for Weekly Specials & Dishes */}
        <motion.div className="featured-container" layout>
          {/* Weekly Specials on the Left */}
          <img
            src={WeeklySpecials}
            alt="weeklyspecials"
            className="weeklySpecials"
          />

          {/* Dishes on the Right */}
          <div className="dishes-column">
            {dishes.slice(0, 3).map((dish) => (
              <motion.div
                className="dish-card"
                key={dish.id}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={dish.imageUrl} alt={dish.name} className="dish-img" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Book an Event Section */}
      <motion.section
        className="book-event"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="event-content">
          <img src={ArenaLogo3} alt="ArenaLogo3" className="arenaLogo3" />
          <div className="event-text">
            <h2>NEED A VENUE?</h2>
            <p>
              Make your special occasion unforgettable with our event hosting
              services.
            </p>
            <button className="cta-btn" onClick={() => navigate("/booking")}>
              BOOK EVENT
            </button>
          </div>
        </div>
      </motion.section>

      {/* Spa Section */}
      <motion.section
        className="spa"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="spa-content">
          <div className="text-content">
            <h2>NEED A BREAK?</h2>
            <p>
              Indulge in luxurious treatments and unwind with our professional
              spa services!
            </p>
            <button className="cta-btn" onClick={() => navigate("/spa")}>
              EXPLORE SPA
            </button>
          </div>
          <img src={ArenaLogo2} alt="ArenaLogo2" className="arenaLogo2" />
        </div>
      </motion.section>

      {/* Featured Images2 */}
      <motion.section
        className="featured-images"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="featuredLine2">
          |PLAYPARK| |PONYRIDES| |SLIP&SLIDE| |JUMPCASTLE|
        </p>
        <motion.div className="dishes-container" layout>
          {dishes.slice(-3).map((dish) => (
            <motion.div
              className="dish-card"
              key={dish.id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={dish.imageUrl} alt={dish.name} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
