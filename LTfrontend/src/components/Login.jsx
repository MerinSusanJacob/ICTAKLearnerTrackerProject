import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ictlogo from '../ictlogo.png'

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({})


    const inputHandler = (e) => {
        console.log("onchange")
        setUser({
            ...user, [e.target.name]: e.target.value
        })
        console.log(user)

    }
    const addHandler = () => {
        console.log("Clicked", user)
        axios.post("http://localhost:5000/api/login", user)
            .then((response) => {
                if (response.data.message === "Login Successfull!!") {
                    const token = response.data.token;
                    const userid = response.data.data._id;
                    console.log(token);
                    console.log(userid);
                    sessionStorage.setItem('userToken', token)
                    sessionStorage.setItem('userId', userid)
                    alert(response.data.message)
                    navigate('/home')
                }
                else {
                    alert(response.data.message)
                }
            })
    }



    return (
        <div>
             {/* FORMS STARTS */}
             <div className="container mx-auto p-xs-2 p-lg-5 w-xs-75 w-lg-25 border bg-light rounded col-sm-10 col-md-4 col-lg-4 col-xl-4 mt-5">
            <img src={ictlogo} className="App-logo mb-2" alt="logo" />
            <p class="fw-light fs-4">ICTAK Learner Tracker App</p>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12"></div>

                    <div className="row">

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <label htmlFor="" className="form-label d-flex text-right">Username</label>
                            <input type="text" className="form-control" name="username" onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <label htmlFor="" className="form-label d-flex text-right">Password</label>
                            <input type='password' className="form-control pwd" name="password" onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
                            <button className="btn btn-success w-100" onClick={addHandler}>Login</button>
                        </div>



                    </div>
                    {/* FORMS ENDS */}
                </div>
            </div>

        </div>
    )
}

export default Login