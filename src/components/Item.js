import React, { useState } from "react";

function Item({ name, category, selectedCategory }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

 
  return (
   
    // category !== selectedCategory ? null :
    <li className={isInCart ? "in-cart" : ""}>
       
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
      
    </li>
    
  );
}

export default Item;
