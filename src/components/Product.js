import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, thumbnail, checkOutIsVisible }) => {



  const productImage = checkOutIsVisible ? (<img src={thumbnail} alt={`${title} thumbnail`}/>) : null;


   if (checkOutIsVisible){
     return (
      <div className="product-card-checkout">
          <div className="product-img-checkout">{productImage}</div>
          <div className="product-text-checkout">
            <div className="product-name-and-price-checkout">
              <div className="product-name-checkout">
                {title}
              </div>
              <div className="product-price-checkout">
                ${price}
              </div>
            </div>
            <div className="remove-product-from-checkout">
              Remove
            </div>
            </div>
      <style>{`
        .product-card-checkout {
          display: flex;
          height: 150px;
        }
        .product-img-checkout {
          width: 40%;
        }
        .product-img-checkout img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          overflow: hidden;
        }
        .product-text-checkout {
          padding: 5%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .product-name-checkout {
          font-size: 1.2em;
        }
        .product-price-checkout {
          font-size: 1em;
          font-weight: 300;
        }
        .remove-product-from-checkout {
          color: red;
          font-size: 1.2em;
        }
      `}</style>
    </div>
     )
   }
  
  // Default view - visible from main product page
  return (

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
        {inventory ? `${inventory} remaining` : null}
      </div>
      <style>{`
        .product-card-text {
          height: 100%;
          width: 90%;
          padding: 5%;
        }
        .product-name-and-price {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: baseline;     
          padding-bottom: 5%;
        }
        .product-name {
          font-size: 1.5em;
        }
        .product-price {
          font-size: 1.2em;
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

        @media screen and (min-width: 1000px){
          .product-name {
            font-size: 1.9em;
          }
          .product-price {
            font-size {
              font-size: 1.5em;
            }
          }
        }
      `}</style>
    </div>
  )
}

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  checkOutIsVisible: PropTypes.bool
}

export default Product
