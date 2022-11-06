import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewProducts from "./NewProducts";


export default function ProductEdit() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [product, setProduct] = useState("");
    const [isEdit, setEdit] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        if (id !== undefined) {
            fetch(`http://localhost:3001/products/${id}`)
                .then((Response) => Response.json())
                .then((json) => {
                    setTitle(json.title)
                    setPrice(json.price)
                    setDescription(json.description)
                    setEdit(true)
                });
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { title, price, description }
        fetch("http://localhost:3001/products", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((json) => {
                setTitle("")
                setPrice("")
                setDescription("")
            })
    }



    const handleUpdate = (e) => {
        e.preventDefault();
        const data = { title, price, description }
        fetch(`http://localhost:3001/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    

    return (

        <div className="container">
            <div className="row mt-4 justify-content-center">
                <div className="col-md-4">
                    <form onSubmit={isEdit ? handleUpdate : handleSubmit}>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                <input type="text" className="form-control" value={title}
                                 id="exampleInputEmail1" aria-describedby="emailHelp"
                                  onChange={(e) => setTitle(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                                <input type="text"  className="form-control" value={price} 
                                id="exampleInputPassword1" aria-describedby="emailHelp" 
                                onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <div>
                                    <textarea  className="form-control" value={description} 
                                    placeholder="Leave a comment here" id="floatingTextarea" 
                                    onChange={(e) => setDescription(e.target.value)} />
                                    <label htmlFor="floatingTextarea">Description</label>
                                </div>
                            </div>
                            <div className=" btn-block">
                                <button type="submit" className="btn btn-primary btn-block">
                                    {
                                    isEdit ? 'UPDATE' : 'SUBMIT'
                                    }
                                </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}


// useEffect(() => {
    //     fetch(`http://localhost:3001/products/${id}`)
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));
    // }, [])