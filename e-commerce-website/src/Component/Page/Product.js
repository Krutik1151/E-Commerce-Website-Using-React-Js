import React, { useState, useEffect } from 'react'
import Navbar from '../Header/Navbar'
import AllProduct from '../component/AllProduct'
import '../Style/ProductPage.css'
const Product = () => {
  const backgroundStyle = {

    backgroundColor: "black",

  }
  let [products, setProducts] = useState([])

  useEffect(() => {

    let url = 'https://dummyjson.com/products'
    fetch(url)
      .then(res => res.json())
      .then((data) => {

        console.log(data)
        setProducts(data.products)

      })
      .catch((err) => console.error(err))


  }, [])
  return (
    <>
      <Navbar background={backgroundStyle} />
      <section className="product-section">
        <h1>ALL Product</h1>
        <div className="product-container">
          {products.map((item) => {

            return <AllProduct key={item.id} productid={item.id} img={item.images[0]} brand={item.brand} title={item.title} info={item.description.slice(0, 20)} price={item.price} rating={item.rating} stock={item.stock} discount={item.discountPercentage} />
          })
          }

        </div>
      </section>
    </>
  )
}

export default Product
