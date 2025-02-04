import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";
import GALLERY1 from "../assets/arena1.jpg";
import GALLERY2 from "../assets/arena2.jpg";
import GALLERY3 from "../assets/arena3.jpg";
import GALLERY4 from "../assets/arena4.jpg";
import GALLERY5 from "../assets/arena5.jpg";
import GALLERY6 from "../assets/arena6.jpg";
import GALLERY7 from "../assets/arena7.jpg";
import GALLERY8 from "../assets/EVENT1.jpg";
import GALLERY9 from "../assets/EVENT2.jpg";
import GALLERY10 from "../assets/EVENT3.jpg";
import GALLERY11 from "../assets/lounge1.jpg";
import GALLERY12 from "../assets/lounge2.jpg";
import GALLERY13 from "../assets/lounge3.jpg";
import GALLERY14 from "../assets/lounge4.jpg";
import GALLERY15 from "../assets/lounge5.jpg";
import GALLERY16 from "../assets/lounge1.jpg";
import GALLERY17 from "../assets/spalogo.jpg";
import GALLERY18 from "../assets/spalogo2.jpg";
import GALLERY19 from "../assets/spalogo4.jpg";
import GALLERY20 from "../assets/spalogo5.jpg";

const Gallery = () => {
  const [images] = useState([
    { id: 1, src: GALLERY1, alt: "Image 1" },
    { id: 2, src: GALLERY2, alt: "Image 2" },
    { id: 3, src: GALLERY3, alt: "Image 3" },
    { id: 4, src: GALLERY4, alt: "Image 4" },
    { id: 5, src: GALLERY5, alt: "Image 5" },
    { id: 6, src: GALLERY6, alt: "Image 6" },
    { id: 7, src: GALLERY7, alt: "Image 7" },
    { id: 8, src: GALLERY8, alt: "Image 8" },
    { id: 9, src: GALLERY9, alt: "Image 9" },
    { id: 10, src: GALLERY10, alt: "Image 10" },
    { id: 11, src: GALLERY11, alt: "Image 11" },
    { id: 12, src: GALLERY12, alt: "Image 12" },
    { id: 13, src: GALLERY13, alt: "Image 13" },
    { id: 14, src: GALLERY14, alt: "Image 14" },
    { id: 15, src: GALLERY15, alt: "Image 15" },
    { id: 16, src: GALLERY16, alt: "Image 16" },
    { id: 17, src: GALLERY17, alt: "Image 17" },
    { id: 18, src: GALLERY18, alt: "Image 18" },
    { id: 19, src: GALLERY19, alt: "Image 19" },
    { id: 20, src: GALLERY20, alt: "Image 20" },
  ]);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={image.src} alt={image.alt} className="gallery-img" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
