import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, thumbnail }) => (
  <div className="product-card-text">
    <div className="product-name-and-price">
      <div className="product-name">
        {title}
      </div>
      <div className="product-price">
        ${price}
      </div>
    </div>
    <div className="inventory-count">
      {inventory ? `${inventory} remaining` : `Sold Out!`}
    </div>
    <style jsx>{`
      .product-card-container {
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .product-card-text {
        padding: 5%;
      }
      .product-name-and-price {
        display: flex;
        justify-content: space-between;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
        color: #292929;
        font-size: 1.5em;
        padding-bottom: 5%;
      }
      .inventory-count {
        font-family: 'Nunito', sans-serif;
        font-weight: 300;
        color: #9B9B9B;
        text-transform: uppercase;
        font-size: .8em;
      }

    `}</style>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
