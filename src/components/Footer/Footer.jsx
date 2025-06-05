import React from 'react'
import "./Footer.css"
import { Link } from 'react-router';

import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { FaGithub, FaEnvelope } from "react-icons/fa6";


function Footer() {
    return (
        <>
            <footer className='footer-container'>
                <div className="footer-distributed">
                    <div className="footer-left">
                        <h3 className='logo-name'>
                        SHOP<span>logo</span>
                        </h3>
                        <p className="footer-links">
                        <Link to={"/"} className="link-1">
                            Home
                        </Link>
                        <Link to={"/Contact"}>Contact</Link>
                        <Link to={"/Login"}>Login</Link>
                        <Link to={"/registration"}>Register</Link>
                        <Link to={"/crearproducto"}>Crear Producto</Link>
                        
                        </p>
                        <p className="footer-company-name">SHOP © 2025</p>
                    </div>
                    <div className="footer-center">
                        <div>
                        <FaMapMarkerAlt className="fa fa-map-marker" />
                        <p>
                            Tacuarí 655, Cdad. Autónoma de Buenos Aires 
                        </p>
                        </div>
                        <div>
                        <BsTelephoneFill className="fa fa-phone" />
                        <p>+11 4382-5916</p>
                        </div>
                        <div>
                        <FaEnvelope className="fa fa-envelope" />
                        <p>
                            <Link to="mailto:support@company.com">contacto@shop.com</Link>
                        </p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p className="footer-company-about">
                        <span>Sobre Nosotros</span>
                        SHOP es una tienda que vende casi todo lo que necesitas. Puedes encontrar ropa, bazar, electrónica, accesorios y mucho más, todo en un solo lugar.
                        </p>
                        <div className="footer-icons">
                        <Link to="#">
                            <FaFacebook className="fa fa-facebook" />
                        </Link>
                        <Link to="#">
                            <AiFillTwitterCircle className="fa fa-twitter" />
                        </Link>
                        <Link to="#">
                            <BsLinkedin className="fa fa-linkedin" />
                        </Link>
                        <Link to="#">
                            <FaGithub className="fa fa-github" />
                        </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer