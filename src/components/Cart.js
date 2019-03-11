import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import cartIcon from '../assets/cart-icon.png'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div className="no-items-cart-inner">
      <img src={cartIcon} />
      <em>Please add some products to cart.</em>
    </div>
  )

  const showTotal = hasProducts ? (
    <p>Total: &#36;{total}</p>
    ) : (<br />)

  return (
    <div className="cart-container-outer">
      <h3>Your Cart</h3>
      <hr />
      <div className="cart-container-inner">
      </div>
      <div>{nodes}</div>
      <div>{showTotal}</div>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
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
        }
        .no-items-cart-inner img {
          width: 10vw;
          min-width: 60px;
          margin-bottom: 5%;
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
