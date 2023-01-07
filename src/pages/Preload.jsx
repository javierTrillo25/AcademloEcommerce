import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styles/Preload.css"

const Preload = () => {
  return (
    <section>
        <h2>Welcome to The Acamdemlo Store</h2>
        <img className='imgPre' src="https://media.tenor.com/ca-yELoXpgAAAAAC/shop.gif" alt="" />
      <div className='prediv'>
        <h4 className='PreH4'>please click on the entrace to enter the store</h4>
      <li className='imglink'><NavLink to="/pre"><img className="PreImg" src="https://img.icons8.com/nolan/512/enter-2.png" alt="" /></NavLink></li>
      </div>
    </section>
  )
}

export default Preload
