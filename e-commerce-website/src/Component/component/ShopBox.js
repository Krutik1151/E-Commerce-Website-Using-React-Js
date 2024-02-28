import React from 'react'
import "../Style/Shop.css"

const ShopBox = (props) => {
  return (
    <>
      <div className="shop-box">
        <div className="shop-box-img">
            <img src={props.img} alt="fashionImg" />
        </div>
        <div className="shop-box-inner">
            <h2>{props.title}</h2>
            <p>{props.info}</p>
            <button className='btn-1'>{props.btntext}</button>
        </div>
      </div>
    </>
  )
}

export default ShopBox
