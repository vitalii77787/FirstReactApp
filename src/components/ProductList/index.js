import React from 'react'
import Product from '../Product'
import { Link } from 'react-router-dom';
import './style.css'

export default function ProductList({ products }) {
    const productElements = products.map(product =>
        <div key={product.id} className="product-list__li">
            <Link to={`/Products/${product.id}`}>
                <Product product={product} />
            </Link>
        </div>
    )
    return (
        <div style={{ padding: 0 }} className="product-wrapper">
            {productElements}
        </div>
    )
}