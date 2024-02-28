import React from 'react'
import Home from './Component/Page/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer/Footer'
import { lazy } from 'react'
import { Suspense } from 'react'
import { CartProvider } from './Component/component/CartContext'


const Product = lazy(() => import('./Component/Page/Product'))
const Category = lazy(() => import('./Component/Page/Category'))
const About = lazy(() => import('./Component/Page/About'))
const Contact = lazy(() => import('./Component/Page/Contact'))
const SmartPhone = lazy(() => import('./Component/Page/SmartPhone'))
const Laptops = lazy(() => import('./Component/Page/Laptops'))
const Skincare = lazy(() => import('./Component/Page/Skincare'))
const Groceries = lazy(() => import('./Component/Page/Groceries'))
const HomeDecoration = lazy(() => import('./Component/Page/HomeDecoration'))
const PorductView = lazy(() => import('./Component/Page/PorductView'))
const Cart = lazy(() => import("./Component/Page/Cart"))


const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loding...</h1>}>
        <CartProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/product" element={<Product />} />
              <Route exact path="/category" element={<Category />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/smartphones" element={<SmartPhone />} />
              <Route exact path="/laptops" element={<Laptops />} />
              <Route exact path="/skincare" element={<Skincare />} />
              <Route exact path="/groceries" element={<Groceries />} />
              <Route exact path="/home-decoration" element={<HomeDecoration />} />
              <Route exact path="/product-view/:productid" element={<PorductView />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </Suspense>
    </>
  )
}

export default App
