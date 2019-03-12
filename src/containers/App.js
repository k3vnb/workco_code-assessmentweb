import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import NavContainer from './NavContainer'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart);

const App = () => (
  <div className="main-container">
    <NavContainer />
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />

    <style>{`
      .main-container {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
        color: #292929;  
        background-color: #f8fafb
        padding: 0 2%;
      }
      button {
        transition: .1s linear;
      }
      button:focus{
        outline:none;
        transform: scale(1.01);
     }
      button:hover {
       cursor: pointer;
     }
    `}</style>
  </div>
)

export default App
