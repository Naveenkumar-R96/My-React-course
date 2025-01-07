import React from 'react'
import './Product.css'
const Product = ({filterdData}) => {
  return (
    <div className='card-container'>
      {filterdData}
    </div>
  )
}

export default Product
