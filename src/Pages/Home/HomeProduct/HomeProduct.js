import React, { useEffect, useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';
import './HomeProduct.css';

const HomeProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/Browsproducts')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div id="products" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5 mb-5'>Featured Product </h1>
            <div className="services-container">
            {
                products.map(service => <ShowProduct
                    key={service.id}
                    service={service}
                >
                </ShowProduct>)
            }
            </div>
            </div>
        </div>
    );
};

export default HomeProduct;