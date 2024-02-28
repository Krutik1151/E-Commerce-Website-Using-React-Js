import React from 'react'
import "../Style/Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <hr />
                <div className="footer-container">
                    <div className="footer-left">
                        <div className="footer-img">
                            <img src="./img/Logo.png" alt="LOGO" />
                        </div>
                        <div className="footer-info">
                            <h1>The best look anytime, anywhere.</h1>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footer-right-container">
                            <div className="footer-right-col">
                                <h1>For Her</h1>
                                <div className="footer-link">
                                    <ul>
                                        <li><a href="#">Women Jeans</a></li>
                                        <li><a href="#">Tops and Shirts</a></li>
                                        <li><a href="#">Women Jackets</a></li>
                                        <li><a href="#">Heels and Flats</a></li>
                                        <li><a href="#">Women Accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-right-col">
                                <h1>For Her</h1>
                                <div className="footer-link">
                                    <ul>
                                        <li><a href="#">Women Jeans</a></li>
                                        <li><a href="#">Tops and Shirts</a></li>
                                        <li><a href="#">Women Jackets</a></li>
                                        <li><a href="#">Heels and Flats</a></li>
                                        <li><a href="#">Women Accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-right-col">
                                <h1>Subscribe</h1>
                                <div className="footer-link">
                                    <input type="email" name="email" id="email" placeholder='Your Email Address...' />
                                    <button type='button' className='btn-3'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                        <div className="footerbottom-left">
                            <h1>Copyright &copy; 2024 Brandstore. Powered by Brandstore. </h1>
                        </div>
                        <div className="footerbottom-right">
                            <div className="footer-icon">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-youtube"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-google"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
