import React, { useState, useEffect } from "react";
import { ManagerPage } from "../pages/ManagerPage";
import { BookingPage } from "../pages/BookingPage";
import ErrorBoundary from "./ErrorBoundary";
import { motion } from "framer-motion";
import "./Bookings.css";

export default function BookingComp() {
  const [bookedDates, setBookedDates] = useState(() => {
    const storedDates = localStorage.getItem("bookedDates");
    return storedDates
      ? JSON.parse(storedDates)
      : ["2025-01-20", "2025-01-22", "2025-01-25"];
  });

  useEffect(() => {
    localStorage.setItem("bookedDates", JSON.stringify(bookedDates));
  }, [bookedDates]);

  const handleBookedDatesChange = (newBookedDates) => {
    setBookedDates(newBookedDates);
  };

  return (
    <ErrorBoundary>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="booking-container"
      >
        <BookingPage bookedDates={bookedDates} />
        <ManagerPage
          bookedDates={bookedDates}
          setBookedDates={handleBookedDatesChange}
        />
      </motion.div>
    </ErrorBoundary>
  );
}
