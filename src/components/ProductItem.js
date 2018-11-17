import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProductItem extends Component {
    state = {
        isOpen: true
    }
    render() {
        const  productItem  = this.props.match.params.number;
        console.log( this.props.match.params.number);
        // const body = this.state.isOpen && <section className="description">{productItem.text}</section>
        return (
            <div className="product">
                    <h2 style={{textAlign:'center'}}>
                   {productItem}
                    </h2>
                    <p>ghgh</p>
                    <Link to='/Products'>Back</Link>
                </div>
        )
    }
}

export default ProductItem