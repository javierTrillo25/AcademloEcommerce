import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCart } from '../../store/slices/cart.slice'
import "./styles/CartProduct.css"

const CartProduct = ({cartProduct}) => {

  const dispatch =useDispatch()

  const DeleteProduct = () =>{
    dispatch(deleteProductCart(cartProduct.id))
  }

  return (
    <articule className='cartProd' >
    <h4 className='cartProd_brand'>{cartProduct.brand}</h4>
    <h3 className='cartProd_t'>{cartProduct.title}</h3>
    <div className='cartProd_q'>
        <p>{cartProduct.productsInCart.quantity}</p>
    </div>
    <footer className='cartProd_footer'>
        <h3 className='cartProd_p'> <span className='cartProd_pt'>Total:</span> ${(cartProduct.productsInCart.quantity * cartProduct.price).toFixed(2)}</h3>
    </footer>
    <i onClick={DeleteProduct}className='cartProd_trash bx bx-trash' ></i>
        </articule>
  )
}

export default CartProduct