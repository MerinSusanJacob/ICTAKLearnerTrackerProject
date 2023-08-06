import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const AdminAdd = (props) => {
    console.log("props data", props.data);
    const [inputs, setInputs] = useState(props.data);
    const navigate = useNavigate();
    const [userToken, setUserToken] = useState(sessionStorage.getItem("userToken"))
    const [userID, setUserID] = useState(sessionStorage.getItem("userId"))
    const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs, [name]: value
        });
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
            password: inputs.password


        }

        if (props.method === "post") {
            axios.post(`http://localhost:5000/api/postudata`, data)
                .then((response) => {
                    if (response.data.message === "Posted successfully") {
                        console.log("response post", response);
                        alert(response.data.message);
                        navigate('/ahome');
                    }
                    else {
                        alert(response.data.message);
                    }
                })
                .catch((err) => { console.log(err) })
        }
        if (props.method === "put") {
            axios.put(`http://localhost:5000/api/putudata/${inputs._id}`, inputs)
                .then((response) => {
                    if (response.data.message === "Updated successfully") {
                        alert(response.data.message);
                        window.location.reload(false);
                    }
                    else {
                        alert(response.data.message);
                    }
                })
                .catch((err) => { console.log(err) })
        }
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
                                        <label htmlFor="role" className="form-label">Role:</label>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                        <select className="form-select"
                                            aria-label="Default select example"
                                            name="role"
                                            value={inputs.role}
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