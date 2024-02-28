import React from 'react';
import "../Style/FilterProduct.css"

const FilterProduct = ({ maxPrice, onPriceChange }) => {

    
  return (
    <div className='filter-product'>
      <input
        type="range"
        min="0"
        max="3000" // You can set this to the maximum price of your products
        value={maxPrice}
        onChange={onPriceChange}
        
      />
       <div style={{color:"green" , fontSize:"1.6rem"}}>Selected max price: ${maxPrice}</div>
    </div>
  );
};

export default FilterProduct;
