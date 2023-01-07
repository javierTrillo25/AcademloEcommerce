import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'
import "./styles/ProductInfo.css"

const ProductInfo = ({product}) => {
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()

    const handleMin =() =>{
        const newValue = quantity-1
        if(newValue >=1){
            setQuantity(newValue)
        }
    }

    const handlePlus=()=>{
        setQuantity(quantity + 1)
    }

    const handleAddProduct = ()=>{
        const data = {
            id: product.id,
            quantity: quantity
        }
        dispatch(addProductCart(data))
    }

return (
    <article className='productInfo'>
        <h2 className='productInfo_title'>{product?.title}</h2>
        <p className='productInfo_des'>{product?.description}</p>
        <footer className='productInfo_footer'>
            <div className='productInfo-con-price'>
                <h3 className='productInfo_price-t'>Price</h3>
                <span className='productInfo_price'>${product?.price}</span>
            </div>
            <div className='productInfo_con-q'>
                <h3 className='productInfo_q-t'>Quantity</h3>
                <div className='productInfo-cc'>
                    <div className='productInfo-minus' onClick={handleMin}>-</div>
                    <div className='productInfo-count'>{quantity}</div>
                    <div className='productInfo-plus' onClick={handlePlus}>+</div>
                </div>
            </div>
            <button
                className='productInfo-btn'
                onClick={handleAddProduct}
                >Add to Cart <i className='bx bx-shopping-bag'></i></button>
        </footer>
    </article>
)
}

export default ProductInfo