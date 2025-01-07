import React from "react";
import "./Navbar.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const Navbar = ({selectedoption,setSelectedOption}) => {
  const handleClick=(e)=>{
    console.log(e.target.value)
    setSelectedOption(e.target.value)
    
  }
  return (
    <div className="allcontents">
      <nav>
        <div>
          <h1 className="title">
            Shoe<span className="title-1">Cart</span>
          </h1>
        </div>
        <div>
          <form action="submit" className="form">
            <input type="search" placeholder="search" className="search-bar" />
            <button type="submit" className="btn">
              Enter
            </button>
          </form>
        </div>
        <div className="icons">
          <FiHeart className="icon" />
          <AiOutlineShoppingCart className="icon" />
          <AiOutlineUserAdd className="icon" />
        </div>
      </nav>

      <div className="dropdowns-container">
        <div className="drops">
          <label htmlFor="dropdown1">Choose an option:</label>
          <select id="dropdown1" name="dropdown1" onChange={handleClick}>
            <option value="option1" className="options">Option 1</option>
            <option value="option2" className="options">Option 2</option>
            <option value="option3" className="options">Option 3</option>
          </select>
        </div>
        <div className="drops">
          <label htmlFor="dropdown2">Choose an option:</label>
          <select id="dropdown2" name="dropdown2" onChange={handleClick}>
            <option value="option4" className="options">Option 1</option>
            <option value="option5" className="options">Option 2</option>
            <option value="option6" className="options">Option 3</option>
          </select>
        </div>
        <div className="drops">
          <label htmlFor="dropdown3">Choose an option:</label>
          <select id="dropdown3" name="dropdown3" onChange={handleClick}>
            <option value="option7" className="options">Option 1</option>
            <option value="option8" className="options">Option 2</option>
            <option value="option9" className="options">Option 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
