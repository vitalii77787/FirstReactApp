import React from 'react'
import Product from '../Product'
import { Link } from 'react-router-dom';
import './style.css'

export default function ProductList({products}) {
    const productElements = products.map(product =>
       
        <Link to={`/Products/${product.id}`}>
            <div key={product.id} className="product-list__li">
            <Product product={product}/>
            </div>
            </Link>
        )
    return (
        <div style={{padding:0}}  className="product-wrapper">
            {productElements}
        </div>
    )
}