import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, Form, style } from "react-bootstrap";
import Products from "./ProductsLayout";
import custom from "./custom.module.css";
import ProductsLayout from "./ProductsLayout";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


export default function Home() {

    return (


        <div className="container-fluide">
            <div className="row">
                <h2 className={`${custom.h2}`}>“ Gardening is a work of a lifetime: you never finish.” </h2>
                <img src="plant2.png" className={`${custom.homeimg}`} />
            </div>
        </div>

    );
}




//     const [products, setProducts] = useState("")

//     useEffect(() => {
//         getProducts()
//     }, [products])

//     const getProducts = () => {
//         fetch('http://localhost:3001/products')
//             .then(res => res.json())
//             .then(json => setProducts(json))
//     }

//     return (
//         <>

//             <div className="container">
//                 <div className="row mt-5">

//                     {
//                         products && products.map((p) =>
//                             <ProductsLayout title={p.title} />
//                         )
//                     }
//                 </div>
//             </div>

//         </>

//     // return (
//     //     <section className={`${custom.home}`}>
//     //         <div className={`${custom.content}`}>
//     //             <h3>much and more<br />than perfume</h3>
//     //             <a href='#' className={`${custom.btn}`}>Get yours now</a>
//     //         </div>
//     //     </section>
//      );

// }