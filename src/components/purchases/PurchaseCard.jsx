import React from 'react'
import { changeDate } from '../../utils/date'
import Productpurchase from './Productpurchase'
import "./styles/PurchaseCard.css"

const PurchaseCard = ({purchase}) => {
  return (
    <article className='purchaseCard'>
    <h2 className='purchaseCard_date'>{changeDate(purchase.createdAt)}</h2>
    <hr className='purchaseCard_line' />
    <section className='purchaseCard_list'> 
    {
        purchase.cart.products.map(productPurchase => <Productpurchase key={productPurchase.id} productPurchase={productPurchase} />)
    }
    
    </section>
    </article>
  )
}

export default PurchaseCard
