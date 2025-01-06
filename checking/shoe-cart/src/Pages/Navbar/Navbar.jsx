import React from "react";
import "./Navbar.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const Navbar = () => {
  return (
    <div>
      <nav>
        <h1 className="title">
          Shoe<span className="title-1">Cart</span>
        </h1>
        <form action="submit" className="form">
          <input type="search" placeholder="search" className="search-bar" />

          <button type="submit " className="btn">
            Enter
          </button>
        </form>
        <div className="icons">
          <FiHeart className="icon" />
          <AiOutlineShoppingCart className="icon" />
          <AiOutlineUserAdd className="icon" />
        </div>
      </nav>

      <div className="dropdowns-container">
        <div className="drops">
          <label for="dropdown">Choose an option:</label>
          <select id="dropdown" name="dropdown">
            <option value="option1" className='options'>Option 1</option>
            <option value="option2" className='options'>Option 2</option>
            <option value="option3" className='options'>Option 3</option>
          </select>
          
        </div>
        <div className="drops">
          <label for="dropdown">Choose an option:</label>
          <select id="dropdown" name="dropdown">
            <option value="option1" className='options'>Option 1</option>
            <option value="option2" className='options'>Option 2</option>
            <option value="option3" className='options'>Option 3</option>
          </select>
          
        </div>
        <div className="drops">
          <label for="dropdown">Choose an option:</label>
          <select id="dropdown" name="dropdown">
            <option value="option1" className='options'>Option 1</option>
            <option value="option2" className='options'>Option 2</option>
            <option value="option3" className='options'>Option 3</option>
          </select>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
