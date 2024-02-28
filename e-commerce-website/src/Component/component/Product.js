import React from 'react'
import "../Style/Product.css"
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>


            <div className="product-box-container">
                <Link to={`/product-view/${props.productid}`}>
                    <div className="product-box-img">
                        <img src={props.img} alt="Product Imges" />
                    </div>
                    <div className="product-info">
                        <h3>{props.title}</h3>
                        <h5> ${props.price}</h5>

                    </div>

                </Link>
            </div>

        </>
    )
}

export default Product
