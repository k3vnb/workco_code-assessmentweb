import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children }) => (
  <div className="products-list-container">
    {/* <h3>{title}</h3> */}
    <div>{children}</div>
    <style>{`
      .products-list-container {
        padding: 5% 0%;
      }
    `}</style>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
