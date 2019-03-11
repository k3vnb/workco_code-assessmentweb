import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Nav from '../components/Nav'

const App = () => (
  <div className="main-container">
    <Nav />
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />

    <style>{`
      .main-container {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
        color: #292929;  
        background-color: #eef2f3;
        padding: 0 2%;
      }
    `}</style>
  </div>
)

export default App
