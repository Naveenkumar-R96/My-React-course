import React from "react";
import "./Navbar.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const Navbar = ({ selectedoption, setSelectedOption, query, setquery }) => {
  const handleClick = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleChange = (e) => {
    setquery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="one">
      <nav>
        <div>
          <h1 className="title">
            Shoe<span className="title-1">Cart</span>
          </h1>
        </div>
        <div>
         
            <input
              type="text"
              placeholder="search"
              className="search-bar"
              value={query}
              onChange={handleChange}
            />
            <button type="submit" className="btn">
              Enter
            </button>
          
        </div>
        <div className="icons">
          <FiHeart className="icon" />
          <AiOutlineShoppingCart className="icon" />
          <AiOutlineUserAdd className="icon" />
        </div>
      </nav>

      <div className="dropdowns-container">
        <div className="drops">
          <label htmlFor="dropdown1">Filter By Category:</label>
          <select id="dropdown1" name="dropdown1" onChange={handleClick}>
            <option value="" className="options">
              all
            </option>
            <option value="sneakers" className="options">
              sneakers
            </option>
            <option value="flats" className="options">
              flats
            </option>
            <option value="sandals" className="options">
              sandals
            </option>
            <option value="heels" className="options">
              Heels
            </option>
          </select>
        </div>
        <div className="drops">
          <label htmlFor="dropdown2">Filter By Color:</label>
          <select id="dropdown2" name="dropdown2" onChange={handleClick}>
            <option value="" className="options">
              all
            </option>
            <option value="black" className="options">
              Black
            </option>
            <option value="blue" className="options">
              Blue
            </option>
            <option value="red" className="options">
              Red
            </option>
            <option value="green" className="options">
              Green
            </option>
            <option value="white" className="options">
              White
            </option>
          </select>
        </div>
        <div className="drops">
          <label htmlFor="dropdown3">Choose an option:</label>
          <select id="dropdown3" name="dropdown3" onChange={handleClick}>
            <option value="" className="options">
              all
            </option>
            <option value={50} className="options">
              $0-50
            </option>
            <option value={100} className="options">
              $50-100
            </option>
            <option value={150} className="options">
              $100-150
            </option>
            <option value={200} className="options">
              Over 200
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
