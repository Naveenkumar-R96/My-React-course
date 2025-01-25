import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShoeDetail = ({ cart, setCart }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extracting the item details passed via state
  const { item } = location.state;

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  };

  const handleAddToCart = (item) => {
    // Check if the item is already in the cart to prevent duplication
    if (!cart.some((cartItem) => cartItem.title === item.title)) {
      setCart([...cart, item]);
    } else {
      alert("Item is already in the cart!");
    }
    navigate("/cart"); // Navigate to the cart after adding the item
  };

  const {
    img,
    title,
    star,
    reviews,
    prevPrice,
    newPrice,
    company,
  } = item;

  return (
    <div className="card-container details-container">
      <div className="card">
        {/* Company Name */}
        <div className="company">
          <span>{company}</span>
        </div>

        {/* Product Image */}
        <img src={img} alt={title} className="card-img" />

        {/* Product Details */}
        <div className="card-details">
          {/* Truncated Product Title */}
          <h3 className="card-title">{truncateTitle(title, 20)}</h3>

          {/* Star Ratings */}
          <div className="card-reviews">
            {Array(star)
              .fill("★")
              .map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            <span className="total-reviews">({reviews})</span>
          </div>

          {/* Product Pricing */}
          <div className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice} only
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="addcart">
            <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
