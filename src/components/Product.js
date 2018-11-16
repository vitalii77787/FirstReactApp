import React, { Component } from 'react';
import './index.css'
class Product extends Component {

    state = {
        isOpen: true
    }
    render() {
        const { product } = this.props;
        console.log(this.props);
        const body = this.state.isOpen && <section className="description">{product.text}</section>
        return (
            <div className="product">
                    <h2 style={{textAlign:'center'}}>
                        {product.title}
                    </h2>
                    {body}
                </div>
        )
    }
}

export default Product