import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Nav = ({products}) => {
    let cartNotification;
    let cartQuantity = 0;
   
    products.forEach(product => cartQuantity += product.quantity);

    if (cartQuantity === 1){
        cartNotification = `You have ${cartQuantity} item in your cart`
    } else if (cartQuantity > 1){
        cartNotification = `You have ${cartQuantity} items in your cart`
    } else {
        cartNotification = `Your cart is empty`
    }


    return (
        <div className="header">
            <h2 className="nav-brand">Acme Store</h2>
            <HashRouter>
                <Link to="/cart">
                    <div className="cart-notification">
                        <FontAwesomeIcon 
                            icon="shopping-cart"
                            size="sm"
                            className="cart-icon"
                        />
                        <div className="cart-text">{cartNotification}</div>
                    </div>
                </Link>
            </HashRouter>
            <style>{`

                .nav-brand {
                    font-size: 2em;
                    margin-bottom: 1%;
                }
                .cart-icon {
                    max-height: 25px;
                    margin-right: 5%;
                }
                .cart-notification {
                    display: flex;
                    align-items: baseline;
                }
                .cart-notification:hover {
                    color: #407FC0;
                    cursor: pointer;
                }
                .cart-notification:disabled {
                    color: #292929;
                }
                .cart-text {
                    margin-bottom: 5%;
                }
                .header a {
                    width: 100%;
                    text-decoration: none;
                    color: #292929;
                    text-align: right;
                }

                @media screen and (min-width: 600px){
                    .header {
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        align-items: baseline;
                    }
                    .nav-brand {
                        font-size: 2.5em;
                        width: 67%;
                    }
                    .cart-notification {
                        display: flex;
                        justify-content: flex-end;
                    }
                }

                @media screen and (min-width: 1000px){
                    .nav-brand {
                        font-size: 3em;
                    }
                }
            `}</style>
        </div>
    );
}

Nav.propTypes = {
    products: PropTypes.array
  }

export default Nav;