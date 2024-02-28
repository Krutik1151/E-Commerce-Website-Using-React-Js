import React, { useState, useEffect } from 'react'
import Navbar from '../Header/Navbar'
import Aside from '../component/Aside'
import '../Style/Singal-Category.css'
import AllProduct from '../component/AllProduct'
import FilterProduct from '../component/FilterProduct'
const Laptops = () => {
    const backgroundStyle = {

        backgroundColor: 'black'

    }
    const [data, setData] = useState([])
    const [maxPrice, setMaxPrice] = useState(Infinity);

    const [searchTerm, setSearchTerm] = useState("");

    const handlePriceChange = (event) => {
        setMaxPrice(event.target.value ? parseInt(event.target.value) : Infinity);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredProducts = data.filter(product =>
        product.price <= maxPrice &&
        product.title.toLowerCase().includes(searchTerm.toLowerCase())

    )

    useEffect(() => {

        fetch('https://dummyjson.com/products/category/laptops')
            .then(res => res.json())
            .then((data) => {

                console.log(data)
                setData(data.products)
            })

    }, [])
    return (
        <>
            <Navbar background={backgroundStyle} />
            <div className="sigal-category-container">
                <Aside />
                <div className="category-container">
                    {filteredProducts.map((item) => {

                        return <AllProduct key={item.id} productid={item.id} img={item.images[0]} brand={item.brand} title={item.title} info={item.description.slice(0, 20)} price={item.price} rating={item.rating} stock={item.stock} discount={item.discountPercentage} />

                    })

                    }
                </div>


            </div>
            <div className="search">
                <div className='product-search'>
                    <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search Product... " />
                </div>

                <FilterProduct maxPrice={maxPrice} onPriceChange={handlePriceChange} />
            </div>
        </>
    )
}

export default Laptops
