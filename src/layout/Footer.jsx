import React from 'react'
import "./styles/Footer.css"

const Footer = () => {
    return (
<footer>
    <hr />
        <p>Todos los derechos reservados Javier Trillo - 2023</p>
    <div className="redes">
        <div className="fIcons">
            <a href="https://www.instagram.com/javiier25/?hl=es" target="_blink"> 
                <img src="https://img.icons8.com/nolan/512/instagram-new.png" alt="" className="fIcon"/> 
            </a>
            <a href="https://web.facebook.com/JtrilloK/" target="_blink">
                <img src="https://img.icons8.com/nolan/512/facebook-new.png"  alt="" className="fIcon"/> 
            </a>
            <a href="https://twitter.com/Javiier25" target="_blink">
                <img src="https://img.icons8.com/nolan/512/twitter.png" alt="" className="fIcon"/>
                </a>
            <a href="https://github.com/javierTrillo25" target="_blink">
            <img src="https://img.icons8.com/nolan/512/github.png" alt="" className="fIcon"/>
        </a>
    </div>
        
    </div>
            </footer>
    )
}

export default Footer
