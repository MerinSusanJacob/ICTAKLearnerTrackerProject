import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const AdminAdd = (props) => {
    console.log("props data", props.data);
    const [inputs, setInputs] = useState(props.data);
    const navigate = useNavigate();
    const [userToken, setUserToken] = useState(sessionStorage.getItem("userToken"))
    const [userID, setUserID] = useState(sessionStorage.getItem("userId"))
    const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));

    useEffect(() => {
        // Redirect user if not authorized
        if (userRole !== 'Admin' && userRole !== 'Training Head') {
            navigate('/ahome');
        }
    }, [userRole]);



    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs, [name]: value
        });
        console.log(inputs);
    }

    const submitHandler = () => {
        //console.log("button clicked",inputs);
        let data = {
            userId: userID,
            token: userToken,
            role: userRole,
            name: inputs.name,
            email: inputs.email,
            username: inputs.username,
            password: inputs.password,
            roleInputs:inputs.roleInputs
        }



        if (props.method === "post") {
            axios.post(`http://localhost:5000/api/postudata`, data)
                .then((response) => {
                    if (response.data.message === "Posted successfully") {
                        Swal.fire('', response.data.message, 'success');
                        navigate('/ahome');
                    }
                    else {
                        Swal.fire('Sorry', response.data.message, '');
                    }
                })
                .catch((err) => { console.log(err) })
        }
        if (props.method === "put") {
            axios.put(`http://localhost:5000/api/putudata/${inputs._id}`, inputs)
                .then((response) => {
                    if (response.data.message === "Updated successfully") {
                        Swal.fire('', response.data.message, 'success');
                        window.location.reload(false);
                    }
                    else {
                        Swal.fire('Sorry', response.data.message, '');
                    }
                })
                .catch((err) => { console.log(err) })
        }
    }

    if (userRole !== 'Admin') {
        return (
            <div className="container" align="center" style={{ marginTop: '120px' }}>
                <Segment style={{ border: 'none' }}>
                    <p>You are not authorized to access this page.</p>
                    <Link to="/ahome">
                        <Button
                            size="mini"
                            style={{ backgroundColor: '#FF0000', color: '#ffffff', fontSize: 15, borderColor: '#FFC300' }}
                        >
                            Go to Home
                        </Button>
                    </Link>
                </Segment>
            </div>
        );
    }


    return (
        <div>
            <div className="container w-50 mt-5 pt-5 bg-secondary-subtle rounded">
                <h3>Add Users</h3>
                <br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            {/* Name */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="name" className="form-label">Name:</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <input type="text"
                                            id="name"
                                            className="form-control"
                                            name="name"
                                            value={inputs.name}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Email ID */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <input type="text"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            value={inputs.email}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Username */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="username" className="form-label">Username:</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <input type="text"
                                            id="username"
                                            className="form-control"
                                            name="username"
                                            value={inputs.username}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <input type="text"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            value={inputs.password}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Role*/}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                        <label htmlFor="roleInputs" className="form-label">Role:</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <select className="form-select"
                                            aria-label="Default select example"
                                            name="roleInputs"
                                            value={inputs.roleInputs}
                                            onChange={inputHandler}>
                                            <option defaultValue>-Select-</option>
                                            <option value="Admin">Admin</option>
                                            <option value="Placement Officer">Placement Officer</option>
                                            <option value="Training Head">Training Head</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Button*/}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row">
                                    {/* offset */}
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                    </div>
                                    {/* Button Submit*/}
                                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                        <button className="btn btn-success" onClick={submitHandler}>Submit</button>
                                    </div>
                                    {/* Button */}
                                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4">
                                        <a href="/ahome"><button className="btn btn-warning">Back to Dashboard</button></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAdd