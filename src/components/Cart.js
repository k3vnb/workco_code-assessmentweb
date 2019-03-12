import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import cartIcon from '../assets/cart-icon.png'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const subTotal = Number(total)
  const taxes = subTotal/12.4
  const newTotal = subTotal + taxes
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        thumbnail={product.thumbnail}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        checkOutIsVisible={true}
      />
    )
  ) : (
    <div className="no-items-cart-inner">
      <img src={cartIcon} alt="your cart"/>
      <div>Please add some products to cart.</div>
    </div>
  )

  const checkoutInfo = hasProducts ? (
    <div>
      <div className="cart-product-card">       
        <div>{nodes}</div>
      </div>
      <hr />
      <div className="cart-totals">
        <p><span className="totals-label">Subtotal:</span> <span className="totals-amounts">&#36;{subTotal.toFixed(2)}</span></p>
        <p><span className="totals-label">Taxes:</span> <span className="totals-amounts">&#36;{taxes.toFixed(2)}</span></p>
        <hr />
        <p><span className="totals-label">Total:</span> <span className="totals-amounts">&#36;{newTotal.toFixed(2)}</span></p>
      </div>
      <div className="update-btn-container">
        <button className="update-btn">Update</button>
      </div>
      <button 
        className="checkout-btn"
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}
      >
        Checkout
      </button>
    </div>
    ) : (<div>{nodes}</div>)

  return (
    <div className="cart-container-outer">
      <h3>Your Cart</h3>
      <hr />
      <div>{checkoutInfo}</div>
      <style>{`
        .cart-container-outer {
          padding: 3% 4%;
        }
        .cart-container-outer h3 {
          font-size: 2.5em;
          margin-bottom: 1%;
        }
        .no-items-cart-inner {
          padding: 5%;
          height: 40vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #9B9B9B;
          font-size: 1.1em;
          text-align: center;
        }
        .no-items-cart-inner img {
          width: 10vw;
          min-width: 60px;
          margin-bottom: 5%;
          opacity: .5;
        }
        .update-btn-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-bottom: 15%;
        }
        .update-btn {
          background-color: transparent;
          border: 1px solid lightgrey;
          height: 60px;
          font-size: 1.3em;
          width: 90%;
        }
        .update-btn:hover {
          border: 1px solid grey;
          color: black;
        }
        .checkout-btn {
          width: 110%;
          margin-left: -5%;
          background-color: #5E97D1;
          height: 80px;
          color: #FFFFFF;
          text-transform: uppercase;
          font-size: 1.1em;
          font-weight: 300;
        }
        .checkout-btn:hover {
          background-color: #407FC0;
        }
        .checkout-btn:disabled {
          background-color: #5E97D1;
        }
        .cart-totals p {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .totals-label {
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
