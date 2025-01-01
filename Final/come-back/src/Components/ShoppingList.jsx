import React, { useState } from "react";

const ShoppingList = () => {
  const [item, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity) return ;

    const newItem = {
      name,
      quantity,
    };
    setItems([...item, newItem]);
    setName('')
    setQuantity('')
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit">Add Item</button>

        <ul>
          {item.map((item, index) => (
            <li key={index}>
              {item.name}-Quantity-{item.quantity}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default ShoppingList;
