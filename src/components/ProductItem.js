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
      <div className="btn-container">
        <button
          className="primary-cta"
          onClick={onAddToCartClicked}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>
    <style jsx>{`
      .product-card {
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        border-radius: 10px;
        height: 375px;
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
