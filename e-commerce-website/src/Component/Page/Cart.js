import React, { useContext } from 'react';
import { CartContext } from '../component/CartContext';
import Navbar from '../Header/Navbar';
import { ToastContainer } from 'react-toastify';
import showMessage from "../component/ReactToster/toast"
import 'react-toastify/dist/ReactToastify.css';
import '../Style/ProductView.css';
import "../Style/Cart.css"
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigation = useNavigate()
    const backgroundColor = {
        backgroundColor: "black"
    }

    const handldelet = (id) => {

        removeFromCart(id);
        showMessage("Product deleted")

    }

    const handleClickCart = ()=>{
        
        navigation('/category')

    }

    return (
        <>
            <Navbar background={backgroundColor} />

            <ToastContainer />

            {cart.length !== 0 ? cart.map((item, index) => {

                return <div key={index} className='cart-container'>

                    <table>
                        <thead>
                            <tr>
                                <th width="10%">Id</th>
                                <th width="10%">Title</th>
                                <th width="30%">Img</th>
                                <th width="30%">Description</th>
                                <th width="20%">Price</th>
                                <th width="10%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.images && item.images.length > 0 && (
                                    <img src={item.images[0]} alt="Product Img" />
                                )}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td><button className='delete-btn' onClick={() => handldelet(item.id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            }) : <> <h1 className='cart-heding-h1'>Your Cart Is Empty  </h1>

                <button className='category-go-page' onClick={handleClickCart}>Go To Category </button>
            </>
            }

        </>
    );
};

export default Cart;