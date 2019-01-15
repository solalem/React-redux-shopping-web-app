import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ADD_TO_CART} from "../../store/actions/shop";
import ProductCard from '../../components/ProductCard';

class Men extends Component {
    render() {

        let products = null;

        if (this.props.productsProps) {
            console.log(this.props.productsProps)
            products = this.props.productsProps
                .filter( product => product.category === 'men' )
                .map( product => {
                    return (
                    <ProductCard
                        key={product.id}
                        productName={product.name}
                        productPrice={product.price}
                        productDiscountPrice={product.discount_price}
                        productSale={product.sale}
                        productImage={product.img}
                        productCategory={product.category}
                        addToCart={() => this.props.addProductToCartProp(product.id)}
                    />
                    )
                })
        }
        return (
            <div className="row">
                {products}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        productsProps: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToCartProp: (productId) => dispatch({type: ADD_TO_CART, productId: productId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Men);