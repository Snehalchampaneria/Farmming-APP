import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, Form, style } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import custom from "./custom.module.css";
import ProductsLayout from "./ProductsLayout";

export default function Products() {


const [products, setProducts] = useState("")

    useEffect(() => {
        getProducts()
    }, [products])

    const getProducts = () => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    return (
        <>
            <LinkContainer to="/Single">
            <div className="container">
                <div className="row mt-5">

                    {
                        products && products.map((p) =>
                            <ProductsLayout title={p.title} id={p.id} />
                        )
                    }
                </div>
            </div>
        </LinkContainer>                        
        </>

    // return (
    //     <section className={`${custom.home}`}>
    //         <div className={`${custom.content}`}>
    //             <h3>much and more<br />than perfume</h3>
    //             <a href='#' className={`${custom.btn}`}>Get yours now</a>
    //         </div>
    //     </section>

    
     );

}