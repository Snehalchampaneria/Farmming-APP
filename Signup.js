import React from "react";
import { useState } from 'react';

import { Button, Form } from "react-bootstrap";


export default function Signup() {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault()
        const role_id = 2
        const data = { user, email, password, role_id }
        fetch('http://localhost:3001/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    // const handleSignup = () => {
    //     const data = { name, email, password };
    //     console.log(data);
    // };

    return (
        <div className="container">
            <div className="row mt-4 justify-content-center">
                <div className="col-md-4">
                    <h1>Signup</h1>
                    <form onSubmit={handleSignup}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e) => setUser(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        
                        <div className='btn-block'>
                            <center>
                            <button type="submit" className="btn btn-primary btn-block md-12 mt-12">Signup</button>
                            </center>
                        </div>    
                        
                    </form>
                </div>
            </div>
        </div>
    );
}