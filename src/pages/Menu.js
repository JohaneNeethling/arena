import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Menu.css";
import ARENA1 from "../assets/arena1.jpg";
import ARENA2 from "../assets/arena2.jpg";
import ARENA3 from "../assets/arena3.jpg";
import { useNavigate } from "react-router-dom";

export function Menu({ addToCart }) {
  const [quantities, setQuantities] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Starters");
  const [selectedMilkshake, setSelectedMilkshake] = useState("Chocolate");
  const [selectedGourmetMilkshake, setSelectedGourmetMilkshake] =
    useState("Oreo");
  const [selectedSauces, setSelectedSauces] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [dishes] = useState([
    { id: 1, imageUrl: ARENA1 },
    { id: 2, imageUrl: ARENA2 },
    { id: 3, imageUrl: ARENA3 },
  ]);

  const menuItems = [
    {
      id: 1,
      category: "Starters",
      name: "ESCARGOT",
      description: "Pan-sauteed snails in creamy garlic sauce",
      price: 89,
    },
    {
      id: 2,
      category: "Starters",
      name: "CHICKEN LIVERS",
      description:
        "Sauteed in Sherry, Onions and Mixed herbs. Choose Peri-peri or Creamy-plain",
      price: 79,
    },
    {
      id: 3,
      category: "Starters",
      name: "JUMBO JALAPENO'S",
      description: "3 Handmade Jumbo Jalapeno's, Crumbed &",
      price: 79,
    },
    {
      id: 4,
      category: "Starters",
      name: "CRUMBED MUSHROOMS",
      description: "6 Button Mushrooms with Tartar Sauce",
      price: 65,
    },
    {
      id: 5,
      category: "Starters",
      name: "CHEESY GARLIC ROLL",
      description: "Large & Delicious",
      price: 55,
    },
    {
      id: 6,
      category: "Starters",
      name: "ARENA KETTLE FRIES",
      description: "Arena Crisps with Pesto, Salsa & Cottage Cheese",
      price: 59,
    },
    {
      id: 7,
      category: "Starters",
      name: "JALAPENO POPPER BALLS",
      description: "8 Panko-Crumbed Jalapeno balls",
      price: 79,
    },
    {
      id: 8,
      category: "Starters",
      name: "CHICKEN KEBABS",
      description: "4 Bite-Size skewers with Onions & BBQ Basting",
      price: 55,
    },
    {
      id: 9,
      category: "Salads",
      name: "CLASSIC GREEK",
      description: "With olives, feta, cucumber and tomatoes",
      price: 89,
    },
    {
      id: 10,
      category: "Salads",
      name: "GRILLED CHICKEN",
      description:
        "Grilled chicken breast served with mixed greens, feta, avo, red onion and cocktail tomatoes. Drizzled with our homemade dressing.",
      price: 119,
    },
    {
      id: 11,
      category: "Steak",
      name: "200G CLASSIC SIRLOIN",
      description: "Served with Chips and Seasonal Veggies",
      price: 159,
    },
    {
      id: 12,
      category: "Steak",
      name: "300G CLASSIC SIRLOIN",
      description: "Served with Chips and Seasonal Veggies",
      price: 159,
    },
    {
      id: 13,
      category: "Steak",
      name: "200G CHEDDARMELT STEAK",
      description:
        "Sirloin steak topped with Cheese and Mushroom Sauce. Served with Chips",
      price: 189,
    },
    {
      id: 14,
      category: "Steak",
      name: "300G CHATEAUBRIAND PEPPER",
      description:
        "Sirloin steak seasoned with Black pepper Flambeed with Cognac Brandy. Served with Seasonal Veggies and Chips",
      price: 239,
    },
    {
      id: 15,
      category: "Steak",
      name: "300G SWISS STEAK",
      description:
        "Panko-Crumbed Sirloin grilled and fried. Topped with Cheddar Cheese and served with Seasonal Veggies, Chips & a Sauce",
      price: 249,
    },
    {
      id: 16,
      category: "Pork",
      name: "EISBEIN",
      description:
        "Crispy smoked corned Ham hock served with creamy Mash, Sauerkraut, hot english Mustard and Seasonal Veggies",
      price: 179,
    },
    {
      id: 17,
      category: "Pork",
      name: "400G PORK LOIN RIBS",
      description:
        "Pork lion Ribs in a sticky BBQ sauce, served with deep fried onions and chips",
      price: 189,
    },
    {
      id: 18,
      category: "Combos",
      name: "200G STEAK & CALAMARI",
      description:
        "200g Sirloin Steak with Crumbed Calamari Strips Served with Chips and Onion Rings",
      price: 189,
    },
    {
      id: 19,
      category: "Combos",
      name: "200G RIBS & CALAMARI",
      description:
        "Ribs with Crumbed Calamari Strips and served with Chips and Onion Rings",
      price: 159,
    },
    {
      id: 20,
      category: "Combos",
      name: "HAKE & CALAMARI",
      description:
        "Hake Grilled or Deep Fried with Crumbed Calamari Strips. Served with Chips and Onion Rings",
      price: 149,
    },
    {
      id: 21,
      category: "Poultry",
      name: "CHICKEN ROULEAU",
      description:
        "Chicken Fillet-Roll filled with spinach, sundried tomatoes, feta, caramelized onions, greenpepper and mushrooms. Served with vegetables. Fried or Crumbed.",
      price: 169,
    },
    {
      id: 22,
      category: "Poultry",
      name: "CURRIED KETO TACO",
      description:
        "Shredded Grilled Chicken breast filling seasoned with celery, coriander and fat-free yoghurt. Served wrapped in lettuce leaves",
      price: 129,
    },
    {
      id: 23,
      category: "Poultry",
      name: "BUTTER CHICKEN POTJIE",
      description:
        "Traditional succulent chicken potjie served with season vegetables and baguette slices",
      price: 139,
    },
    {
      id: 24,
      category: "Poultry",
      name: "CAJUN CHICKEN",
      description:
        "Sauteed Chicken fillets with onions and peppers in creamy cajun spice mix. Served with stir-fry vegetables.",
      price: 159,
    },
    {
      id: 25,
      category: "Seafood",
      name: "HAKE THERMADOR",
      description:
        "Grilled Hake in a creamy Cheese, Wine-based Mushroom Sauce. Served with rice.",
      price: 149,
    },
    {
      id: 26,
      category: "Seafood",
      name: "MUSSEL POTJIE",
      description:
        "Black half-shell Mussels and Mussel Meat in a Creamy Garlic sauce & Baguette slices.",
      price: 149,
    },
    {
      id: 27,
      category: "Seafood",
      name: "SEAFOOD PASTA",
      description:
        "Mussel & Prawn-meat, half-shell Mussels & Calamari sauteed in Wine, Garlic & Herbs.",
      price: 169,
    },
    {
      id: 29,
      category: "Seafood",
      name: "PRAWN COODLES",
      description:
        "Spiralized cucumber salad with tomatoes and chilli flakes, topped with Prawns. Seasoned with Ginger & Garlic.",
      price: 119,
    },
    {
      id: 30,
      category: "Drinks",
      name: "REGULAR FILTER COFFEE",
      price: 30,
    },
    {
      id: 31,
      category: "Drinks",
      name: "AMERICANO",
      price: 35,
    },
    {
      id: 32,
      category: "Drinks",
      name: "CAPPUCCINO",
      price: 39,
    },
    {
      id: 33,
      category: "Drinks",
      name: "LATTE",
      price: 39,
    },
    {
      id: 34,
      category: "Drinks",
      name: "ROOIBOS TEA",
      price: 29,
    },
    {
      id: 35,
      category: "Drinks",
      name: "ENGLISH TEA",
      price: 29,
    },
    {
      id: 36,
      category: "Drinks",
      name: "MILO",
      price: 35,
    },
    {
      id: 37,
      category: "Drinks",
      name: "HOT CHOCOLATE",
      price: 39,
    },
    {
      id: 38,
      category: "Drinks",
      name: "300ML SOFT DRINKS",
      description: "Coke, Coke Zero, Sprite, Fanta, Creamsoda",
      price: 39,
    },
    {
      id: 39,
      category: "Drinks",
      name: "330ML APPLETIZER",
      price: 28,
    },
    {
      id: 40,
      category: "Drinks",
      name: "330ML GRAPETIZER",
      price: 28,
    },
    {
      id: 41,
      category: "Drinks",
      name: "330ML CAPPY JUICE",
      description: "Orange, Breakfast Punch",
      price: 30,
    },
    {
      id: 42,
      category: "Drinks",
      name: "500ML STILL WATER",
      price: 20,
    },
    {
      id: 43,
      category: "Drinks",
      name: "500ML SPARKLING WATER",
      price: 20,
    },
    {
      id: 44,
      category: "Drinks",
      name: "350ML REGULAR MILKSHAKE",
      description:
        "Chocolate, Bubblegum, Rum & Raisin, Lime, Strawberry, Banana",
      price: 45,
    },
    {
      id: 45,
      category: "Drinks",
      name: "350ML GOURMET MILKSHAKE",
      description: "Oreo, Bischoffs, Nutella, Peanutbutter, BarOne",
      price: 55,
    },
    {
      id: 46,
      category: "Dessert",
      name: "DEEP-FRIED ICE CREAM",
      description: "Vanilla Ice Cream like you have never tasted!",
      price: 55,
    },
    {
      id: 47,
      category: "Dessert",
      name: "CHEESECAKE TARTLET",
      description: "Nutty-Choc Cheesecake",
      price: 39,
    },
    {
      id: 48,
      category: "Dessert",
      name: "BROWNIE TARTLET",
      description: "Chocolate Brownie with Vanilla Ice Cream",
      price: 39,
    },
    {
      id: 49,
      category: "Dessert",
      name: "PEPPERMINT CRISP TART",
      description: "A Slice of pepper-mint heaven",
      price: 45,
    },
    {
      id: 50,
      category: "Sides & Extra's",
      name: "SAUCES",
      description: "Mushroom, Pepper, Garlic",
      price: 39,
    },
    {
      id: 51,
      category: "Sides & Extra's",
      name: "BEER BATTERED ONION RINGS",
      price: 49,
    },
    {
      id: 52,
      category: "Sides & Extra's",
      name: "OVEN ROASTED VEGGIES",
      price: 55,
    },
    {
      id: 53,
      category: "POTATOES",
      name: "OVEN ROASTED VEGGIES",
      description: "Mash, Chips, Fried",
      price: 55,
    },
  ];

  const handleQuantityChange = (id, quantity) => {
    setQuantities({ ...quantities, [id]: quantity });
  };

  const handleMilkshakeChange = (event) => {
    setSelectedMilkshake(event.target.value);
  };

  const handleGourmetMilkshakeChange = (event) => {
    setSelectedGourmetMilkshake(event.target.value);
  };

  const handleSauceChange = (event) => {
    const selected = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedSauces(selected);
  };

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  // Modal close function
  const closeModal = () => {
    setShowModal(false);
  };

  // Modified addToCart to show the modal
  const handleAddToCart = (item) => {
    console.log(`Adding ${item.name} to cart`);
    addToCart(item, quantities[item.id] || 1);
    setShowModal(true);
    console.log("Modal Opened: ", showModal);
  };

  return (
    <div className="menu">
      <h1 className="menu-title">ARENA RESTAURANT</h1>
      <p className="menu-paragraph">
        Indulge in an exquisite culinary journey with our fine dining menu,
        designed to delight even the most discerning palates. Whether you prefer
        the elegance of dining in our sophisticated ambiance or the convenience
        of savoring gourmet flavors at home, our menu promises an unforgettable
        experience. Explore meticulously crafted dishes, prepared with the
        finest ingredients and an artistic touch, and place your order with ease
        for a seamless experience, whether you choose to dine in or take away.
      </p>
      <div className="category-filter">
        <button
          className={`category-button ${
            selectedCategory === "Starters" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("Starters")}
        >
          STARTERS
        </button>
        <button
          className={`category-button ${
            selectedCategory === "Salads" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("Salads")}
        >
          SALADS
        </button>
        <button
          className={`category-button ${
            selectedCategory === "Steak" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("Steak")}
        >
          STEAK
        </button>
        <button
          className={`category-button ${
            selectedCategory === "Pork" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("Pork")}
        >
          PORK
        </button>
        <button
          className={`category-button ${
            selectedCategory === "Combos" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("Combos")}
        >
          COMBOS
        </button>
        <button
          className={`category-button ${
            selectedCategory === "Poultry" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("Poultry")}
        >
          POULTRY
        </button>
        <button
          className={`category-button ${
            selectedCategory === "Seafood" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("Seafood")}
        >
          SEAFOOD
        </button>
        <button
          className={`category-button ${
            selectedCategory === "Drinks" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("Drinks")}
        >
          DRINKS
        </button>
        <button
          className={`category-button ${
            selectedCategory === "Dessert" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("Dessert")}
        >
          DESSERT
        </button>
        <button
          className={`category-button ${
            selectedCategory === "Sides & Extra's" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("Sides & Extra's")}
        >
          SIDES & EXTRA'S
        </button>
      </div>

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
            <p className="menu-item-description">
              {selectedCategory === "Drinks" &&
              item.name === "350ML REGULAR MILKSHAKE"
                ? `Selected Flavor: ${selectedMilkshake}`
                : selectedCategory === "Drinks" &&
                  item.name === "350ML GOURMET MILKSHAKE"
                ? `Selected Flavor: ${selectedGourmetMilkshake}`
                : selectedCategory === "Sides & Extra's" &&
                  item.name === "SAUCES"
                ? `Selected Sauces: ${selectedSauces.join(", ") || "None"}`
                : item.description}
            </p>
            <p className="menu-item-price">R{item.price}</p>
            <label>
              Quantity:
              <input
                className="quantity-input"
                type="number"
                min="1"
                value={quantities[item.id] || 1}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                }
              />
            </label>
            {item.name === "350ML REGULAR MILKSHAKE" &&
              selectedCategory === "Drinks" && (
                <div className="milkshake-dropdown">
                  <label>Select Milkshake Flavor:</label>
                  <select
                    value={selectedMilkshake}
                    onChange={handleMilkshakeChange}
                  >
                    <option value="Chocolate">Chocolate</option>
                    <option value="Bubblegum">Bubblegum</option>
                    <option value="Rum & Raisin">Rum & Raisin</option>
                    <option value="Lime">Lime</option>
                    <option value="Strawberry">Strawberry</option>
                    <option value="Banana">Banana</option>
                  </select>
                </div>
              )}
            {item.name === "350ML GOURMET MILKSHAKE" &&
              selectedCategory === "Drinks" && (
                <div className="milkshake-dropdown">
                  <label>Select Gourmet Milkshake Flavor:</label>
                  <select
                    value={selectedGourmetMilkshake}
                    onChange={handleGourmetMilkshakeChange}
                  >
                    <option value="Oreo">Oreo</option>
                    <option value="Bischoffs">Bischoffs</option>
                    <option value="Nutella">Nutella</option>
                    <option value="Peanutbutter">Peanutbutter</option>
                    <option value="BarOne">BarOne</option>
                  </select>
                </div>
              )}
            {item.name === "SAUCES" &&
              selectedCategory === "Sides & Extra's" && (
                <div className="sauce-dropdown">
                  <label>Select Sauces:</label>
                  <select
                    multiple
                    value={selectedSauces}
                    onChange={handleSauceChange}
                  >
                    <option value="Mushroom">Mushroom</option>
                    <option value="Pepper">Pepper</option>
                    <option value="Garlic">Garlic</option>
                  </select>
                </div>
              )}
            <motion.button
              className="add-to-cart"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAddToCart(item, quantities[item.id] || 1)}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Item Added to Cart</h2>
            <p>Your item has been successfully added to the cart.</p>
            <motion.button
              className="go-to-cart"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate("/order");
                closeModal();
              }}
            >
              Go to Cart
            </motion.button>
            <motion.button
              className="close-modal"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeModal}
            >
              Continue Shopping
            </motion.button>
          </div>
        </div>
      )}
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
    </div>
  );
}
