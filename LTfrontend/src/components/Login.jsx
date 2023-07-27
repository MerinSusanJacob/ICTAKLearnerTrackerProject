import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
                    const token=response.data.token;
                    const userid=response.data.data._id;
                    console.log(token);
                    console.log(userid);
                    sessionStorage.setItem('userToken',token)
                    sessionStorage.setItem('userId',userid)
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
             <p class="fw-light fs-4">ICTAK Learner Tracker App</p>
           
            {/* FORMS STARTS */}
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12"></div>

                    <div className="row g-3">

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type='password' className="form-control pwd" name="password" onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <button className="btn btn-success" onClick={addHandler}>Login</button>
                        </div>



                    </div>
                    {/* FORMS ENDS */}
                </div>
            </div>

        </div>
    )
}

export default Login