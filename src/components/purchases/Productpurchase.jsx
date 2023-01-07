import React from 'react'
import "./styles/Productpurchase.css"

const Productpurchase = ({productPurchase}) => {
  return (
    <articule className='productPurchase'>
        <h4 className='productPurchase_title'>{productPurchase.title}</h4>
        <h4 className='productPurchase_q'>{productPurchase.productsInCart.quantity}</h4>
        <h4 className='productPurchase_price'>$ {(productPurchase.productsInCart.quantity * productPurchase.price).toFixed(2)} </h4>
      
    </articule>
  )
}

export default Productpurchase
