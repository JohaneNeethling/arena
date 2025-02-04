import React, { useState } from "react";
import "./Contact.css";

const ContactSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="contact-section">
      {/* FAQ Section */}
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div
          className={`faq-item ${activeFAQ === 0 ? "active" : ""}`}
          onClick={() => toggleFAQ(0)}
        >
          <h4>What are your business hours?</h4>
          {activeFAQ === 0 && <p>We are open from 08:00 till late.</p>}
        </div>
        <div
          className={`faq-item ${activeFAQ === 1 ? "active" : ""}`}
          onClick={() => toggleFAQ(1)}
        >
          <h4>Do you accept reservations?</h4>
          {activeFAQ === 1 && (
            <p>
              Of course, we accept reservations! Please contact us via email or
              phone.
            </p>
          )}
        </div>
        <div
          className={`faq-item ${activeFAQ === 2 ? "active" : ""}`}
          onClick={() => toggleFAQ(2)}
        >
          <h4>How Do I Contact You For Additional Information?</h4>
          {activeFAQ === 2 && <p>outdoorarena1@gmail.com | 079 790 3741</p>}
        </div>
        <div
          className={`faq-item ${activeFAQ === 3 ? "active" : ""}`}
          onClick={() => toggleFAQ(3)}
        >
          <h4>Is there parking available?</h4>
          {activeFAQ === 3 && (
            <p>
              We have more than enough parking available, but there are nearby
              street parking options.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
