import { motion } from "framer-motion";
import "./Order.css"; // Import external CSS for additional styling
import CART from "../assets/CartIcon.png";
import { useNavigate } from "react-router-dom";

export function Order({ cart, removeFromCart }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      name: formData.get("name"),
      type: formData.get("type"),
      time: formData.get("time"),
      items: cart,
      request: formData.get("request"),
    };

    let message =
      `*Order Details*\n\n` +
      `*Name:* ${orderDetails.name}\n` +
      `*Order Type:* ${orderDetails.type}\n` +
      `*Preferred Time:* ${orderDetails.time}\n\n` +
      `*Items Ordered:*\n` +
      `${orderDetails.items
        .map(
          (item) =>
            `• ${item.name} (x${item.quantity}) - *$${
              item.price * item.quantity
            }*`
        )
        .join("\n")}\n\n` +
      `*Total:* *R${cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)}*\n\n`;

    if (orderDetails.request) {
      message += `*Special Request/Comment:* ${orderDetails.request}\n\n`;
    }

    message += `Thank you for your order! We will process it shortly.`;

    const whatsappLink = `https://wa.me/+27797903741?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();
  return (
    <div className="order">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="order-title"
      >
        <img src={CART} alt="Cart" className="cart-icon" /> Your Order
      </motion.h1>
      {cart.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <ul className="cart-list">
            {cart.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cart-item"
              >
                {" "}
                <button
                  onClick={() => removeFromCart(index)}
                  className="remove-btn"
                >
                  Remove
                </button>
                {item.name} x{item.quantity} - R{item.price * item.quantity}
              </motion.li>
            ))}
          </ul>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="total-price"
          >
            Total: R{total.toFixed(2)}
          </motion.p>
          <form onSubmit={handleSubmit}>
            <motion.label
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Name:
              <input type="text" name="name" required />
            </motion.label>
            <motion.label
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Type:
              <select name="type" required>
                <option value="Dine In">Dine In</option>
                <option value="Take Away">Take Away</option>
                <option value="Delivery">Delivery</option>
              </select>
            </motion.label>
            <motion.label
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Time:
              <input type="time" name="time" required />
            </motion.label>
            <motion.label
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Special Requests/Comments:
              <textarea
                name="request"
                rows="4"
                placeholder="Enter any special requests or comments here..."
              ></textarea>
            </motion.label>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="submit-btn"
            >
              Place Order
            </motion.button>
          </form>
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="empty-cart"
        >
          Your cart is empty. Please add items from the menu.
          <button className="cta-btn" onClick={() => navigate("/menu")}>
            ORDER A MEAL
          </button>
        </motion.p>
      )}
    </div>
  );
}
