import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, thumbnail, checkOutIsVisible }) => {



  const productImage = checkOutIsVisible ? (<img src={thumbnail} alt={`${title} thumbnail`}/>) : null;


   if (checkOutIsVisible){
     return (
       <div className="product-card-and-buttons-checkout">
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
        </div>
        <div className="increment-decrement-quantity-container">
          <button className="decrement-product-quantity">-</button>
          <div className="checkout-product-quantity">1</div>
          <button className="increment-product-quantity">+</button>
        </div>
        <style>{`
          .product-card-and-buttons-checkout {
            margin-bottom: 3%;
          }
          .product-card-checkout {
            display: flex;
            height: 150px;
            margin-bottom: 1%;
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
          .increment-decrement-quantity-container {
            display: flex;
            width: 100vw;
            padding: 1%;
            height: 60px;

          }
          .checkout-product-quantity {
            background-color: white;
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5em;
          }
          .increment-decrement-quantity-container button {
            background-color: #F2F4F7;
            width: 30%;
            height: 100%;
            font-size: 2em;
            color: #D8D8D8;
            border: none;
          }
          .increment-decrement-quantity-container button:hover {
            background-color: #5E97D1;
          }
          .increment-decrement-quantity-container button:disabled {
            background-color: #F9F9F9;
          }
          .increment-product-quantity {
            border-radius: 0 20px 20px 0;
          }
          .decrement-product-quantity {
            border-radius: 20px 0 0 20px;
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
