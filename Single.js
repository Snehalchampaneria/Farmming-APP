import React from "react";
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Header from './Header';
import ProductEdit from './ProductEdit';
import ProductsLayout from "./ProductsLayout";
import Products from "./Products";


export default function Single(props) {

    let { id } = useParams();
    console.log(id);
    const [Product, setProducts] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
            .then((Response) => Response.json())
            .then((json) => setProducts(json));

    }, [Product])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mt-4 mb-4'>
                    <Card>
                        <Card.Body>
                            <Card.Title>{Products.title}</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>
                                {Products.price}
                            </Card.Subtitle>
                            <Card.Text>
                                some quick example text to build on the card
                            </Card.Text>
                            <Card.Link href='#'>card Link</Card.Link>
                            <Card.Link href='#'>onther link</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

