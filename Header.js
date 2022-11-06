import React from "react";
import custom from "./custom.module.css";
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import Home from "./Home";
import ProductsLayout from "./ProductsLayout";

export default function Header() {
    const navigate = useNavigate()
    const handleLogout = (e)  => {
        e.preventDefault()
        localStorage.removeItem('user')
        navigate('/home')
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${custom.bglight}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Kisaan.com</a>
                    <button className="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <LinkContainer to="/home">
                                <li className="nav-item">
                                    <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">Home</a>
                                </li>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <li className="nav-item">
                                    <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">About</a>
                                </li>
                            </LinkContainer>
                            <LinkContainer to="/products">
                                <li className="nav-item">
                                    <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">Products</a>
                                </li>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <li className="nav-item">
                                    <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">Signup</a>
                                </li>
                            </LinkContainer>
                            {
                                localStorage.getItem('user') ?
                                
                                    <li className="nav-item">
                                        <a className={`nav-link active ${custom.navLink}`}
                                            aria-current="page"
                                            href="" onClick={handleLogout}>Logout</a>
                                    </li>
                                    :
                                    <>
                                        <LinkContainer to="/login">
                                            <li className="nav-item">
                                                <a className={`nav-link active ${custom.navLink}`}
                                                    aria-current="page"
                                                    href="#">Login</a>
                                            </li>
                                        </LinkContainer>
                                    </>
                            }

                            <LinkContainer to="/contactus">
                                <li className="nav-item">
                                    <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">Contactus</a>
                                </li>
                            </LinkContainer>
                            <LinkContainer to="/newproducts">
                                <li className="nav-item">
                                    <a className={`nav-link active ${custom.navLink}`}
                                        aria-current="page"
                                        href="#">NewProducts</a>
                                </li>
                            </LinkContainer>


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


            {/* <i className="fa-solid fa-cart-shopping"></i>
            <div className="container">
            <div className="row mt-5">
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/>
            </div>
            </div> */}
        </>

    );
}