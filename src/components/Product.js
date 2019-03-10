import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, thumbnail }) => (
  <div className="product-card-top">
    <div>
      <img className="thumbnail" src={thumbnail} alt="product thumbnail"/>
    </div>
    <div className="product-name-and-price">
      <div className="product-name">
        {title}
      </div>
      <div className="product-price">
        {price}
      </div>
    </div>
    <div className="inventory-count">
      {inventory ? `${inventory} remaining` : `Sold Out!`}
    </div>
    <style jsx>{`
      .thumbnail{
        object-fit: contain;
        height: 50px;
        width: 50px;
      }
      .product-card-top {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .product-name-and-price {
        display: flex;
        justify-content: space-between;
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
