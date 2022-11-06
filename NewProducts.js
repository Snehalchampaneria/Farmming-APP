import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProductEdit from "./ProductEdit";
import Header from "./Header";
import Single from "./Single";


export default function NewProducts() {
    const [products, setProducts] = useState([])
    const [searchproducts, setSearchproducts] = useState(products)


    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.value
        if (search) {
            const result = products.filter((item) => {
                // return item.title.toLowerCase().startsWith(search.toLowerCase())
                return item.title.toLowerCase().includes(search.toLowerCase())
            })
            setSearchproducts(result)
        } else {
            console.log('ff')
            setSearchproducts(products)
        }
    }

    useEffect(() => {
        getproducts()
    }, [])

    const getproducts = () => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                setSearchproducts(json)
            });
    }



    const handleDelete = (id) =>{
        fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE',
        });
    }

    


    return (

        <div className="container">
            <div className="row mt-4">
                <div className="col-md-12">
                    <LinkContainer to="/productedit">
                        <button className="btn btn-info mb-2">ADD PRODUCT</button>
                    </LinkContainer>
                    <form>
                        <input type="text" placeholder="Search.." onChange={handleSearch} />
                    </form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th >id</th>
                                <th >Title</th>
                                <th >Price</th>
                                <th >Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchproducts && searchproducts.map((p) =>
                                    <tr>
                                        <td>{p.id}</td>
                                        <td>{p.title}</td>
                                        <td>{p.price}</td>
                                        <td>{p.description}</td>
                                        <td>
                                            <LinkContainer to={`/update/${p.id}`}>
                                                <button className="btn btn-primary" >EDIT</button>
                                            </LinkContainer>
                                            <button className="btn btn-danger" onClick={() => handleDelete(p.id)}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>

    )
}


