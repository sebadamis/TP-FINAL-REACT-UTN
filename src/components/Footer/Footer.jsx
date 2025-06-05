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
                        <h3>
                        SHOP<span>logo</span>
                        </h3>
                        <p className="footer-links">
                        <Link href="#" className="link-1">
                            Home
                        </Link>
                        <Link to="#">Blog</Link>
                        <Link to="#">Pricing</Link>
                        <Link to="#">About</Link>
                        <Link to="#">Faq</Link>
                        <Link to="#">Contact</Link>
                        </p>
                        <p className="footer-company-name">Company Name © 2015</p>
                    </div>
                    <div className="footer-center">
                        <div>
                        <FaMapMarkerAlt className="fa fa-map-marker" />
                        <p>
                            <span>444 S. Cedros Ave</span> Solana Beach, California
                        </p>
                        </div>
                        <div>
                        <BsTelephoneFill className="fa fa-phone" />
                        <p>+1.555.555.5555</p>
                        </div>
                        <div>
                        <FaEnvelope className="fa fa-envelope" />
                        <p>
                            <Link to="mailto:support@company.com">support@company.com</Link>
                        </p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
                        convallis velit, eu auctor lacus vehicula sit amet.
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