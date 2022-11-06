import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';


export default function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUser] = useState("");
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/users')
            .then((response) => response.json())
            .then((json) => {
                const verify = json.filter((item) =>
                 {
                    if (item.email === email) 
                    {
                        return email
                    }
                }
                )
                if (verify) 
                {
                    if (verify[0].password === password)
                     {
                        if (verify[0].role_id === 2)
                        {
                            console.log("User..")
                            localStorage.setItem('user', JSON.stringify(verify))
                            navigate('/home')
                            
                        }
                        else 
                        {
                            console.log("Admin..")  
                            navigate('/home')
                        }
                    }

                }

            });
        }





                return (
                    <>

                        <div className="container">
                            <div className="row mt-4 justify-content-center">
                                <div className="col-md-4">
                                    <h1>Login</h1>
                                    <form onSubmit={handleLogin}>

                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>

                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control"
                                                id="exampleInputPassword1"
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className='btn-block'>
                                            <center>
                                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                                            </center>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                )

            }
