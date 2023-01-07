import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/home/Categories'
import ProductCard from '../components/home/ProductCard'
import { getAllProducts } from '../store/slices/products.slice'
import "./styles/Home.css"

const Home = () => {
    const [nameProduct, setNameProduct] = useState("")
    const [category, setCategory] = useState("")
    const [filterProducts, setFilterProducts] = useState([])
const products = useSelector(state =>state.products)

const dispatch = useDispatch()

const handleSubmit =(e)=>{
    e.preventDefault()
    const newName= e.target.nameProduct.value
    setNameProduct(newName)
}

    useEffect(() =>{
        dispatch(getAllProducts())
},[])

useEffect(()=>{
setFilterProducts(products)
},[products])

useEffect (()=>{
const newProducts = products.filter(product=>product.title.includes(nameProduct) && (product.category.id === category || category=== ""))
setFilterProducts(newProducts)
},[nameProduct, category])

    return (
    <main className='home'>
        <form className='home_form' onSubmit={handleSubmit}>
            <div className='home_form_div'>
                <input className='home_form-input' type="text" id="nameProduct" placeholder='What are you looking for?' />
                <button className='home_form-btn'><i className='bx bx-search-alt'></i></button>
            </div>
        </form>
        <Categories setCategory={setCategory} />
    <section className='home_containerProducts'>
        {
            filterProducts.map(product => <ProductCard key={product.id} product={product} />)
        }
    </section>
    </main>
)
}

export default Home