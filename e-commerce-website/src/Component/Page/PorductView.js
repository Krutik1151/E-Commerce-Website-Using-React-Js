// ProductView.js
import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../Header/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../component/CartContext';

import { ToastContainer} from 'react-toastify';
import showMessage from "../component/ReactToster/toast"
import 'react-toastify/dist/ReactToastify.css';
import '../Style/ProductView.css';

const PorductView = () => {
  const backgroundColor = {
    backgroundColor: 'black'
  };

  let { productid } = useParams();
  let [data, setData] = useState({});
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigate()

  useEffect(() => {
    let apiaddress = `https://dummyjson.com/products/${productid}`;
    console.log(apiaddress);
    fetch(apiaddress)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [productid]);

  const handleClick = () => {
    addToCart(data);
    showMessage("Product Added")
  };
  const handleNavigatCart = () => {

    navigation('/cart')

  }

  const handlPrev = () =>{
    
    navigation(-1)
    
  }



  return (
    <>
      <Navbar background={backgroundColor} />
      <div className="productview-container">
        <ToastContainer/>
        <div className="product--view-img">
          {data.images && data.images.length > 0 && (
            <img src={data.images[0]} alt="Product Img" />
          )}
        </div>
        <div className="product-view-info">
          <h2>{data.brand}</h2>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <h3>Price ::  <span> {data.price} </span></h3>
          <h5>Discount ::  {data.discountPercentage}</h5>
          <h4> {data.rating}
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </h4>
          <span>Avilable Stock ::  {data.stock}</span>
          <div className="add-cart-btn">
            <button className='add-btn' onClick={handleClick}>ADD TO CART </button>
            <button className='add-btn margin-top' onClick={handleNavigatCart}>GO TO CART </button>
          </div>
          <button className='margin-top'>
            <button className='btn-1' onClick={handlPrev}>Go To Prev</button>
          </button>
        </div>
      </div>
    </>
  );
};

export default PorductView;
