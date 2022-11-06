import React from "react";
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Header from './Header';


export default function Single() {

    let { id } = useParams();
    console.log(id);
    const [Product, setProducts] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
            .then((Response) => Response.json())
            .then((json) => setProducts(json));

    }, [Product])

    return (
        <div className='container '>
            <div className='row '>
                <div className='col-md-6 mt-4 mb-4'>
                    <Card>
                        <Card.Body>
                            <Card.Title>{Product.title}</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>
                                {Product.price}
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

