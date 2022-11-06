import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Single from "./Single";
import Products from "./Products";

export default function ProductsLayout(props) {


    return (
        <LinkContainer to={`/products/${props.id}`}>
            <div className="col-md-4 mt-4 mb-4 ">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </LinkContainer>

    );
}