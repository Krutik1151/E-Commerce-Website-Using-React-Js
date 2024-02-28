import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useRef } from 'react'
import { CartContext } from '../component/CartContext'
import "../Style/Navbar.css"


const Navbar = (props) => {
  const [isOpen , setIsOpen] = useState(false)
  let { background } = props

  let navStyle = {
    backgroundColor: background.backgroundColor
  }

  const { totalPrice } = useContext(CartContext);

  const navRef = useRef()

  const showNavbar =  ()=>{
    
    navRef.current.classList.toggle("Responsive_navbar")
    setIsOpen(!isOpen)
  }

  return (
    <>

      <nav className='navigation' style={navStyle}>

        <div className="header">
          <div className="left-nav">
            <div className="logo">
              <img src="./img/Logo.png" alt="Logo" />
            </div>
            <div className="nav-link " >
              <ul ref={navRef}  className='Responsive_navbar'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/category">Category</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="rigth-nav">
            <ul>

              <li><Link to="/#">${totalPrice}</Link></li>
              <li><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
              <li><Link to="/#"><i className="fa-solid fa-user"></i></Link></li>
            </ul>
          </div>
        </div>

        <div className="button">
          <button onClick={showNavbar}>
             {isOpen ? <i className="fa-solid fa-bars"></i> :<i className="fa-solid fa-x"></i> }
          </button>
        </div> 
      </nav>

    </>
  )
}

export default Navbar
