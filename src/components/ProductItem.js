import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'



const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product-card" style={{ marginBottom: 20 }}>
    <img className="thumbnail" src={product.thumbnail} alt={`${product.title} thumbnail`}/>
    <div className="product-card-text-and-btn">
      <Product
        className="product-card"
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <div className="btn-container">
        <button
          className="primary-cta"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>
    </div>
    <style jsx>{`
      .product-card {
        border: 2px solid black;
        width: 90%;
        border-radius: 10px;
        height: 390px;
      }
      .thumbnail{
        object-fit: cover;
        height: 55%;
        width: 100%;
        overflow: hidden;
        border-bottom: 1px solid black;
        border-radius: 10px 10px 0 0;
      }
      .btn-container {
        padding: 0 0 5% 5%;
      }
      .primary-cta {
        background-color: #5E97D1;
        min-height: 40px;
        width: 45%;
        border-radius: 20px;
        padding: .5% 2%;
        color: #FFFFFF;
        text-transform: uppercase;
        font-family: 'Nunito', sans-serif;
        font-weight: 300;
        font-size: .85em;
      }
      .primary-cta:hover {
        background-color: #407FC0;
      }
      .primary-cta:disabled {
        background-color: #5E97D1;
      }

      @media screen and (min-width: 600px){
        .product-card {
          display: flex;
          height: 180px;
        }
        .thumbnail {
          height: 100%;
          border-radius: 10px 0 0 10px;
          width: 35%;
        }
        .product-card-text-and-btn {
          width: 50%;
          padding-left: 5%;
        }
      }
    `}</style>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
