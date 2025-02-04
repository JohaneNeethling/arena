import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
import "./BookingPage.css";
import VENUEPIC from "../assets/EVENT1.jpg";
import VENUE1 from "../assets/lounge1.jpg";
import VENUE2 from "../assets/lounge2.jpg";
import VENUE3 from "../assets/lounge4.jpg";
import VENUE4 from "../assets/arena1.jpg";
import VENUE5 from "../assets/arena4.jpg";
import VENUE6 from "../assets/arena5.jpg";

export function BookingPage({ bookedDates }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Cocktails");

  const bookingFormRef = useRef(null);

  const menuItems = [
    {
      id: 1,
      category: "Cocktails",
      name: "ARENA PALMS",
      description: "Vodka, Blue Curacao, Orange Juice, Grenadine in layers",
      price: 65,
    },
    {
      id: 2,
      category: "Cocktails",
      name: "BAY BREEZE",
      description: "Malibu Rum, Cranberry Juice, Pineapple Juice",
      price: 59,
    },
    {
      id: 3,
      category: "Cocktails",
      name: "ZANZIBAR",
      description: "Malibu Rum, Blue Curacao, Pineapple Juice",
      price: 59,
    },
    {
      id: 4,
      category: "Cocktails",
      name: "BLUE LAGOON",
      description: "Vodka, Blue Curacao, Lemonade",
      price: 59,
    },
    {
      id: 5,
      category: "Cocktails",
      name: "SEX ON THE BEACH",
      description: "Vodka, Schnapps, Cranberry, Pineapple Juice",
      price: 65,
    },
    {
      id: 6,
      category: "Cocktails",
      name: "WOO-WOO",
      description: "Vodka, Cranberry Juice, Peach Schnapps",
      price: 59,
    },
    {
      id: 7,
      category: "Cocktails",
      name: "ARENA FIZZ",
      description: "Watermelon Cordial, Peach Schnapps",
      price: 55,
    },
    {
      id: 8,
      category: "Cocktails",
      name: "BLUEBERRY FIZZ",
      description: "Blueberry Cordial, Peach Schnapps",
      price: 55,
    },
    {
      id: 9,
      category: "Cocktails",
      name: "WHITE RUSSIAN",
      description:
        "Blueberry Cordial, Peach SchnappsVodka, Kalhua & Cream on Ice",
      price: 65,
    },
    {
      id: 10,
      category: "Cocktails",
      name: "HAZELNUT DAIQUIRI",
      description: "Bacardi Rum, Hazelnut Syrup on ice",
      price: 59,
    },
    {
      id: 11,
      category: "Cocktails",
      name: "PINA COLADA",
      description: "Bacardi Rum, Pina Colada Mix on ice",
      price: 55,
    },
    {
      id: 12,
      category: "Cocktails",
      name: "CHERRY DAIQUIRI",
      description: "Bacardi Rum, Cherry Syrup on ice",
      price: 55,
    },
  ];

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [dishes] = useState([
    { id: 1, imageUrl: VENUE1 },
    { id: 2, imageUrl: VENUE2 },
    { id: 3, imageUrl: VENUE3 },
    { id: 4, imageUrl: VENUE4 },
    { id: 5, imageUrl: VENUE5 },
    { id: 6, imageUrl: VENUE6 },
  ]);

  const isBooked = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return Array.isArray(bookedDates) && bookedDates.includes(dateString);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `*Booking Details*\n\n` +
      `*Name:* ${customerName}\n` +
      `*Date:* ${selectedDate.toISOString().split("T")[0]}\n` +
      `*Time:* ${selectedTime}\n` +
      `*Seating Place:* ${selectedPlace}\n` +
      `*Contact Info:* ${customerContact}\n\n` +
      `Thank you for your booking!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappPhoneNumber = `+27797903741`;
    const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  const scrollToForm = () => {
    if (bookingFormRef.current) {
      window.scrollTo({
        top: bookingFormRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="booking-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="booking-content">
        <img src={VENUEPIC} alt="VenuePic" className="venuePicLogo" />
        <div className="text-content">
          <motion.h1
            className="heading"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            NEED A QUOTE?
          </motion.h1>
          <p className="booking-description">
            Thinking about hosting your next event at Arena Restaurant? We’re
            here to help! Request a customized quote tailored to your specific
            needs. Whether it’s a birthday party, wedding, conference, or
            special occasion, our team will provide you with detailed pricing
            for venue rental, equipment, and additional services. Simply fill
            out the form below with your event details, and we’ll get back to
            you with an accurate quote to make your event a success. Let us help
            bring your vision to life with flexible pricing and exceptional
            service!
          </p>
          <button className="book-btn" onClick={scrollToForm}>
            BOOK YOUR EVENT!
          </button>
        </div>
      </div>

      {/* Featured Images */}
      <motion.section
        className="featured-images"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="featuredLine">
          RESTAURANT | LOUNGE & BAR | PARTIES | SPA
        </p>
        <motion.div className="dishes-container" layout>
          {dishes.slice(0, 3).map((dish) => (
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

      {/* Cocktail Menu */}
      <div className="cocktail-wrapper">
        <h3 className="cocktail-title">Did you know...?</h3>
        <p className="cocktail-description">
          {" "}
          We're famous for our cocktails all around town! Curious to see what
          the buzz is about? Take a look at our wide selection for carefully
          curated cocktails, available only at Arena Lounge & Bar.
        </p>
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="menu-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="menu-item-title">{item.name}</h2>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">R{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Images */}
      <motion.section
        className="featured-images"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div className="dishes-container" layout>
          {dishes.slice(3, 6).map((dish) => (
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

      <motion.form
        className="booking-form"
        onSubmit={handleSubmit}
        ref={bookingFormRef} // attach the ref to the form
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="form-title">Book Your Event!</h3>
        <motion.label
          htmlFor="customerName"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Name & Last Name:
        </motion.label>
        <motion.input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          className="input-field"
        />

        <motion.label
          htmlFor="customerContact"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Information:
        </motion.label>
        <motion.input
          type="text"
          id="customerContact"
          value={customerContact}
          onChange={(e) => setCustomerContact(e.target.value)}
          required
          className="input-field"
        />

        <motion.label
          htmlFor="calendar"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Desired Date:
        </motion.label>
        <motion.div
          className="calendar-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Calendar
            value={selectedDate}
            onChange={handleDateChange}
            tileDisabled={({ date }) => isBooked(date)}
            tileClassName={({ date }) => (isBooked(date) ? "booked-date" : "")}
          />
        </motion.div>

        <motion.label
          htmlFor="selectedTime"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Time:
        </motion.label>
        <motion.input
          type="time"
          id="selectedTime"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
          className="input-field"
        />

        <motion.label
          htmlFor="selectedPlace"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Seating Area:
        </motion.label>
        <motion.select
          id="selectedPlace"
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.target.value)}
          required
          className="input-field"
        >
          <option value="Lounge">Lounge</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Wheelhouse">Wheelhouse</option>
          <option value="Custom">Custom</option>
        </motion.select>

        <motion.button
          type="submit"
          disabled={isBooked(selectedDate)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="submit-btn"
        >
          Request Quote
        </motion.button>
      </motion.form>
      {isBooked(selectedDate) && (
        <motion.p
          className="error-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          This date is already booked. Please select another date.
        </motion.p>
      )}
    </motion.div>
  );
}
