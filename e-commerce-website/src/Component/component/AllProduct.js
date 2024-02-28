import React from 'react'
import '../Style/AllProducts.css'
import { Link } from 'react-router-dom'

const AllProduct = (props) => {
    return (
        <>

            <div className="products-box-container">
                <Link to={`/product-view/${props.productid}`}>
                    <div className="products-img">
                        <img src={props.img} alt="img" />
                    </div>
                    <div className="products-information">
                        <h2>{props.brand}</h2>
                        <h1>{props.title}</h1>
                        <p>{props.info}</p>
                        <h3>$ {props.price}</h3>
                        <h5>Discount {props.discount}%</h5>
                        <h4>
                            {props.rating}
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </h4>
                        <span>available Stock {props.stock}</span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default AllProduct
