import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product-card" style={{ marginBottom: 20 }}>
    <Product
      className="product-card"
      thumbnail={product.thumbnail}
      title={product.title}
      price={product.price}
      inventory={product.inventory} />
    <button
      className="primary-cta"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
    <style jsx>{`
      .product-card {
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .primary-cta {
        background-color: #5E97D1;
        min-height: 20px;
        height: 5vw;
        border-radius: 16px;
        padding: 1% 2.5%;
        color: #FFFFFF;
        text-transform: uppercase;
        font-family: 'Nunito', sans-serif;
        font-weight: 300;
      }
      .primary-cta:hover {
        background-color: #407FC0;
      }
      .primary-cta:disabled {
        background-color: #5E97D1;
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
