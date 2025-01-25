import React from "react";
import "../Pages/Products/Product.css";
import { NavLink ,Link} from "react-router-dom";
import { useState } from "react";
const Card = ({
  img,
  title,
  star,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,id,item
}) => {
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

   const [cutitem, setCutItem] = useState([]);

 
  return (
    <div>
      <div className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{truncateTitle(title, 10)}</h3>
          <div className="card-reviews">
            {star}
            {star}
            {star}
            {star}
            <span className="total-reviews">{reviews}</span>
          </div>
          <div className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice} only
            </div>
          </div>
          <Link to={`/details/${id}`} state={{ item }}>
            <button className="button glow" >Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
