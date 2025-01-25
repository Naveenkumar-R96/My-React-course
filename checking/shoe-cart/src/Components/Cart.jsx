import React from "react";

const Cart = ({ cart ,setCart}) => {

  const handleRemove = (itemToRemove) => {
    setCart(cart.filter((item) => item.title !== itemToRemove.title));
  }
  return (
    <div >
      {cart.length === 0 ? (
        <h1 style={{textAlign:"center"}}>Cart is Empty</h1>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className=" cart-container">
              <div className="card">
                <div className="company">
                  <span>{item.company}</span>
                </div>
                <img src={item.img} alt={item.title} className="card-img" />
                <div className="card-details">
                  <h3 className="card-title">{item.title}</h3>
                  <div className="card-reviews">
                    {item.star}
                    {item.star}
                    {item.star}
                    {item.star}
                    <span className="total-reviews">{item.reviews}</span>
                  </div>
                  <div className="card-price">
                    <div className="price">
                      <del>{item.prevPrice}</del> {item.newPrice} only
                    </div>
                  </div>
                  <div className="addcart">
                    <button onClick={() => handleRemove(item)}>remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
