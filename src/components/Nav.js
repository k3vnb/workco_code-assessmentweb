import React from 'react'
import cartIcon from '../assets/cart-icon.png'
import PropTypes from 'prop-types'


const Nav = () => (
    <div className="header">
        <h2 className="nav-brand">Acme Store</h2>
        <div className="cart-notification">
            <img src={cartIcon} />
            <div className="cart-text">Your cart is empty</div>
        </div>
        <style>{`
            .nav-brand {
                font-size: 2em;
                margin-bottom: 1%;
            }
            .cart-notification img {
                max-height: 25px;
                margin-right: 1%;
            }
            .cart-notification {
                display: flex;
                align-items: baseline;
            }
            .cart-text {
                margin-bottom: 5%;
            }

            @media screen and (min-width: 600px){
                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                }
                .nav-brand {
                    font-size: 2.5em;
                }
                .cart-notification {
                    width: 30%;
                }
            }

            @media screen and (min-width: 1000px){
                .nav-brand {
                    font-size: 3em;
                }
            }
        `}</style>
    </div>
)


export default Nav;