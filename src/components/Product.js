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
      .product-card-text {
        height: 100%;
        width: 90%;
      }
      .product-card-text {
        padding: 5%;
      }
      .product-name-and-price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
        color: #292929;
        
        padding-bottom: 5%;
      }
      .product-name {
        font-size: 1.5em;
      }
      .product-price {
        font-size: 1.3em;
        font-weight: 300;
      }
      .inventory-count {
        font-family: 'Nunito', sans-serif;
        font-weight: 300;
        color: #9B9B9B;
        text-transform: uppercase;
        font-size: .8em;
      }
      @media screen and (min-width: 600px){
        .product-card-text {
          height: 50%;
        }

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
