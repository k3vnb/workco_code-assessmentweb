import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, thumbnail }) => (
  <div className="product-card-top">
    <div><img className="thumbnail" src={thumbnail} alt="product thumbnail"/></div>
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
    <style jsx>{`
      .thumbnail{
        object-fit: contain;
        height: 50px;
        width: 50px;
      }
    `}</style>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
