import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./QuotePage.css";
import ArenaLogo2 from "../assets/spalogo.jpg";
import backmassage from "../assets/backmassage.png";
import neckmassage from "../assets/neckmassage.png";
import headmassage from "../assets/headmassage.png";
import fullbodymassage from "../assets/fullbodymassage.png";
import halfmassage from "../assets/halfmassage.png";
import legmassage from "../assets/legmassage.png";
import handmassage from "../assets/handmassage.png";
import eyebrowtint from "../assets/eyebrowtint.png";
import eyebrowshape from "../assets/eyebrowshape.png";
import eyebrowshapetint from "../assets/eyebrowshape&tint.png";
import flarelashes from "../assets/flarelashes.png";
import browsandlashes from "../assets/browsandlashes.png";
import lashremoval from "../assets/lashremoval.png";
import pedicuregeloverlay from "../assets/pedicuregeloverlay.png";
import gelspapedi from "../assets/gelspapedi.png";
import overlaygelmani from "../assets/overlaygelmani.png";
import gelspamani from "../assets/gelspamani.png";
import SPA1 from "../assets/spalogo2.jpg";
import SPA2 from "../assets/spalogo4.jpg";
import SPA3 from "../assets/spalogo5.jpg";

const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    treatments: [], // Change from {} to []
    message: "",
  });

  const [selectedCategory, setSelectedCategory] = useState("MASSAGES");

  const productsRef = useRef(null);

  const [dishes] = useState([
    { id: 1, imageUrl: SPA1 },
    { id: 2, imageUrl: SPA2 },
    { id: 3, imageUrl: SPA3 },
  ]);

  const products = [
    {
      id: 1,
      service: "EYEBROWS",
      title: "EYEBROW TINTING",
      price: "R50",
      image: eyebrowtint,
    },
    {
      id: 2,
      service: "EYEBROWS",
      title: "EYEBROW SHAPE",
      price: "R70",
      image: eyebrowshape,
    },
    {
      id: 3,
      service: "EYEBROWS",
      title: "EYEBROW SHAPE & TINT",
      price: "R130",
      image: eyebrowshapetint,
    },
    {
      id: 4,
      service: "LASHES",
      title: "FLARE LASHES",
      price: "R280",
      image: flarelashes,
    },
    {
      id: 5,
      service: "LASHES",
      title: "LASHES & BROWS",
      price: "R380",
      image: browsandlashes,
    },
    {
      id: 6,
      service: "LASHES",
      title: "LASH REMOVAL",
      price: "R50",
      image: lashremoval,
    },
    {
      id: 7,
      service: "PEDICURE",
      title: "GEL COLOUR OVERLAY - PEDICURE",
      price: "R150",
      image: pedicuregeloverlay,
    },
    {
      id: 8,
      service: "PEDICURE",
      title: "GEL SPA PEDICURE",
      price: "R220",
      image: gelspapedi,
    },
    {
      id: 9,
      service: "MANICURE",
      title: "GEL COLOUR OVERLAY - MANICURE",
      price: "R180",
      image: overlaygelmani,
    },
    {
      id: 10,
      service: "MANICURE",
      title: "GEL SPA MANICURE",
      price: "R220",
      image: gelspamani,
    },
    {
      id: 11,
      service: "MASSAGES",
      title: "BACK MASSAGE - 30MIN",
      price: "R200",
      image: backmassage,
    },
    {
      id: 12,
      service: "MASSAGES",
      title: "NECK MASSAGE - 30MIN",
      price: "R200",
      image: neckmassage,
    },
    {
      id: 13,
      service: "MASSAGES",
      title: "HEAD MASSAGE - 30MIN",
      price: "R200",
      image: headmassage,
    },
    {
      id: 14,
      service: "MASSAGES",
      title: "FULL BODY MASSAGE - 75MIN",
      price: "R400",
      image: fullbodymassage,
    },
    {
      id: 15,
      service: "MASSAGES",
      title: "FULL BODY MASSAGE - 90MIN",
      price: "R550",
      image: fullbodymassage,
    },
    {
      id: 16,
      service: "MASSAGES",
      title: "BACK, NECK & SHOULDERS MASSAGE - 45MIN",
      price: "R300",
      image: halfmassage,
    },
    {
      id: 17,
      service: "MASSAGES",
      title: "BACK, NECK & SHOULDERS MASSAGE - 60MIN",
      price: "R350",
      image: halfmassage,
    },
    {
      id: 18,
      service: "MASSAGES",
      title: "LOWER LEG & FOOT MASSAGE - 40MIN",
      price: "R250",
      image: legmassage,
    },
    {
      id: 19,
      service: "MASSAGES",
      title: "ARM & HAND MASSAGE - 30MIN",
      price: "R150",
      image: handmassage,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        treatments: {
          ...prevData.treatments,
          [value]: checked,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleToggleTreatment = (treatment) => {
    setFormData((prevData) => {
      const updatedTreatments = prevData.treatments.includes(treatment)
        ? prevData.treatments.filter((t) => t !== treatment) // Remove treatment
        : [...prevData.treatments, treatment]; // Add treatment

      return {
        ...prevData,
        treatments: updatedTreatments,
      };
    });
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const { name, email, treatments, message } = formData;

    const selectedTreatments = Object.keys(treatments).filter(
      (treatment) => treatments[treatment]
    );

    const whatsappMessage = `*New Quote Request: ARENA BEAUTY SPA*\n
*Name:* ${name}\n
*Email:* ${email}\n
*Services Selected:* ${
      selectedTreatments.length > 0
        ? selectedTreatments.join(", ")
        : "None selected"
    }\n
*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/27797903741?text=${encodedMessage}`;
    window.location.href = whatsappURL;
  };

  const scrollToForm = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const filteredProducts = products.filter(
    (product) => product.service === selectedCategory
  );

  return (
    <div className="quote-section">
      <motion.div
        className="spa-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="spa-header">
          <img src={ArenaLogo2} alt="ArenaLogo2" className="arenaSpaLogo" />
          <div className="spa-text">
            <h1 className="spa-welcome">ARENA BEAUTY SPA</h1>
            <p className="spa-intro">
              Indulge in relaxation and rejuvenation at our spa. We offer
              personalized quotes based on your preferences and needs. Our team
              is ready to create a tailored spa experience just for you. Simply
              provide us with details about the services you're interested in,
              and we’ll send you a quote that fits your schedule. Let us help
              you unwind!
            </p>
            <motion.button
              onClick={scrollToForm}
              className="view-products-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              REQUEST A QUOTE
            </motion.button>
          </div>
        </div>
      </motion.div>
      {/* Featured Images */}
      <motion.section
        className="featured-images"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
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
      <div ref={productsRef}>
        {/* Category filter buttons */}
        <div className="category-filter">
          {Object.keys(
            products.reduce((acc, p) => ({ ...acc, [p.service]: true }), {})
          ).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="spa-cat-button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-img-spa"
              />
              <h4>{product.title}</h4>
              <p className="price">{product.price}</p>
              <button
                onClick={() => handleToggleTreatment(product.title)}
                className="add-rev-quote"
              >
                {formData.treatments.includes(product.title)
                  ? "Remove from Quote"
                  : "Add to Quote"}
              </button>
            </div>
          ))}
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="quote-title"
      >
        SEE SOMETHING YOU LIKE?
      </motion.h2>
      <p className="quote-intro">
        Thank you for choosing our spa for your wellness journey. To provide you
        with the best experience, we offer personalized quotes based on your
        specific needs. Whether you're planning a solo retreat, a couple’s
        escape, or a group wellness experience, we're here to help craft the
        perfect spa day for you. Please fill out the form below with details
        about the services you're interested in, and our team will respond
        promptly with a customized quote tailored to your preferences. We look
        forward to helping you relax and recharge!
      </p>
      <motion.form
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        onSubmit={sendWhatsAppMessage}
        className="quote-form"
      >
        <label>Name</label>
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          whileFocus={{ scale: 1.05 }}
        />
        <label>Email</label>
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          whileFocus={{ scale: 1.05 }}
        />
        <label>Selected Treatments</label>
        <ul className="selected-treatments-list">
          {formData.treatments.map((treatment, index) => (
            <li key={index}>{treatment}</li>
          ))}
        </ul>
        <label>Message</label>
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="submit-button"
        >
          REQUEST QUOTE
        </motion.button>
      </motion.form>
    </div>
  );
};

export default QuotePage;
