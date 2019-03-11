import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import cartIcon from '../assets/cart-icon.png'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
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
      <img src={cartIcon} />
      <div>Please add some products to cart.</div>
    </div>
  )

  const checkoutInfo = hasProducts ? (
    <div>
      <div className="cart-product-card">
        
        <div>{nodes}</div>
      </div>
      <p>Total: &#36;{total}</p>
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
        .checkout-btn {
          width: 100%;
          background-color: #5E97D1;
          height: 50px;
          color: #FFFFFF;
          text-transform: uppercase;
          font-size: 1.1em;
          font-weight: 300;
        }
        .checkout-btn:hover {
          background-color: #407FC0;
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
