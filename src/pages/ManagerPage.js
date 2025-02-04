import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
import "../components/Bookings.css";
import "./ManagerPage.css";

export function ManagerPage({ bookedDates, setBookedDates }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isInputVisible, setIsInputVisible] = useState(false); // New state to toggle input visibility

  const handlePasswordSubmit = () => {
    const correctPassword = "admin123";
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMarkAsBooked = () => {
    const dateString = selectedDate.toISOString().split("T")[0];
    if (!Array.isArray(bookedDates)) return;
    if (!bookedDates.includes(dateString)) {
      setBookedDates([...bookedDates, dateString]);
    }
  };

  const handleUnmarkAsBooked = () => {
    const dateString = selectedDate.toISOString().split("T")[0];
    if (!Array.isArray(bookedDates)) return;
    setBookedDates(
      bookedDates.filter((bookedDate) => bookedDate !== dateString)
    );
  };

  const handleCloseManagerMode = () => {
    setIsAuthenticated(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="manager-page"
    >
      {!isAuthenticated ? (
        <>
          {/* Button to show password input */}
          {!isInputVisible && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsInputVisible(true)}
              className="manager-btn"
            >
              Manager Mode
            </motion.button>
          )}

          {/* Password input that becomes visible when the button is pressed */}
          {isInputVisible && (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button
                onClick={handlePasswordSubmit}
                className="submit-btn-manager"
              >
                Submit
              </button>
            </motion.div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="calender-container"
        >
          <Calendar
            value={selectedDate}
            onChange={handleDateChange}
            tileClassName={({ date }) =>
              Array.isArray(bookedDates) &&
              bookedDates.includes(date.toISOString().split("T")[0])
                ? "booked"
                : ""
            }
          />
          <div className="button-container">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMarkAsBooked}
              className="booking-btn-manager"
            >
              Mark as Booked
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUnmarkAsBooked}
              className="booking-btn-manager"
            >
              Unmark as Booked
            </motion.button>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCloseManagerMode}
              className="booking-btn-manager"
            >
              Close Manager Mode
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
