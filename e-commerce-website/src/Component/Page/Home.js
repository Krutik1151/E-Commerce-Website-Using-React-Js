import React, { useState, useEffect } from 'react'
import "../Style/Home.css"
import Navbar from '../Header/Navbar'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ShopBox from '../component/ShopBox';
import Product from '../component/Product';
import Stor from '../component/Stor';



const Home = () => {
  const backgroundStyle = {

    backgroundColor: "rgba(0,0,0,0.07)",
    

    // 
  }

  let option = {

    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    dots: false,
    margin: 20,
    center: true,
    innerHeight: 10,
    stagePadding: 0,
    responsive: {

      1100: {
        items: 4
      },
      768: {
        items: 2
      },
      500: {
        items: 1
      },
      300: {
        items: 1        
      }

    }

  }


  let [product, setProduct] = useState([])
  useEffect(() => {

    {
      fetch('https://dummyjson.com/products?limit=12&skip=10&select=title,price,images')
        .then(res => res.json())
        .then((data) => {

          console.log(data)
          setProduct(data.products)

        })
        .catch((err)=>{
          
          console.log(err)
        })

    }

  }, [])

  return (
    <>
      <section className="setcion-1 ">
        <Navbar background={backgroundStyle} />

        <div className="home-heading ">
          <h1>Raining Offers For <br /> Hot Summer!</h1>
          <h4>25% Off On All Products</h4>
          <button className='btn-1'>SHOP NOW</button>
          <button className='btn-2'>FIND MORE</button>
        </div>
      </section>

      <section className="section-2">

        <OwlCarousel className='owl-theme' {...option}>
          <div className='item'>
            <img src="./img/client-logo-1.png" alt="logo" />
          </div>
          <div className='item'>
            <img src="./img/client-logo-2.png" alt="logo" />
          </div>
          <div className='item'>
            <img src="./img/client-logo-3.png" alt="logo" />
          </div>
          <div className='item'>
            <img src="./img/client-logo-4.png" alt="logo" />
          </div>
          <div className='item'>
            <img src="./img/client-logo-6.png" alt="logo" />
          </div>
          <div className='item'>
            <img src="./img/client-logo-3.png" alt="logo" />
          </div>

        </OwlCarousel>;


      </section>

      <section className="section-3">
        <ShopBox img="./img/fashion-1.jpg" title="20% Off On Tank Tops" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum." btntext="SHOP NOW" />
        <ShopBox img="./img/fashion-2.jpg" title="Latest Eyewear For You" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum." btntext="SHOP NOW" />
        <ShopBox img="./img/fashion-3.jpg" title="Let's Lorem Suit Up!" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum." btntext="CHECK NOW" />
      </section>

      <section className="section-4">

        <div className="sec-4-heading">
          <h1>Featured Products</h1>
        </div>
        <div className="sec-4-container">
          {product.map((item) => {

            return <Product  productid={item.id} key={item.id} title={item.title} price={item.price} img={item.images[0]} />

          })
          }
        </div>



      </section>

      <section className="section-5">
          <div className="sec-5-container">
            <div className="shop-offer">
              <h2>Limited Time Offer </h2>
              <h1>Special Edition</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <h5>Buy This T-shirt At 20% Discount, Use Code OFF20</h5>
              <button className="btn btn-1">SHOP NOW</button>
            </div>
          </div>

      </section>

      <section className="section-6">
        <div className="sec-6-container">
          <Stor img="./img/stor-1.png" title="Worldwide Shipping" info="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
          <Stor img="./img/stor-2.png" title="Best Quality" info="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
          <Stor img="./img/stor-3.png" title="Best Offers" info="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
          <Stor img="./img/stor-4.png" title="Secure Payments" info="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
        </div>
      </section>
    </>
  )
}

export default Home
