import React from 'react'
import "../Style/Aside.css"
import { Link } from 'react-router-dom'

const Aside = () => {
    return (
        <>

            <aside className='aside-content'>
                
                    <div className="aside-link">

                        <ul>
                            <li><Link to="/smartphones">Smartphones</Link></li>
                            <li><Link to="/laptops">Laptops</Link></li>
                            <li><Link to="/skincare">Skincare</Link></li>
                            <li><Link to="/groceries">Groceries</Link></li>
                            <li><Link to="/home-decoration">Home-Decoration</Link></li>
                            
                        </ul>


                    </div>

            </aside>



        </>
    )
}

export default Aside
