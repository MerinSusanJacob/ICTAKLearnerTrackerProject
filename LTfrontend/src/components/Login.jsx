import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ictlogo from "../ictlogo.png";
import { Container, Alert } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [showAlert, setShowAlert] = useState(false); // State variable for showing the alert
  const [alertMessage, setAlertMessage] = useState(""); // State variable to hold the alert message

  const inputHandler = (e) => {
    console.log("onchange");
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };
  const addHandler = () => {
    console.log("Clicked", user);
    axios
      .post("http://localhost:5000/api/login", user)
      .then((response) => {
        if (response.data.message === "Login Successfull!!") {
          const token = response.data.token;
          const role = response.data.data.role;
          // console.log(token);
          // console.log(role);
          sessionStorage.setItem("userToken", token);
          sessionStorage.setItem("userRole", role);
          setShowAlert(true); // Show the success alert
          setAlertMessage(response.data.message); // Set the success alert message
          navigateToHome(); // Call a separate function to navigate to the home page after showing the alert
        } else {
          setShowAlert(true); // Show the error alert
          setAlertMessage(response.data.message); // Set the error alert message
        }
      })
      .catch((err) => console.log(err));
  };

  // Function to navigate to the home page
  const navigateToHome = () => {
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Navigate after 3 seconds (adjust the duration as needed)
  };

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
              <label htmlFor="" className="form-label d-flex text-right">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={inputHandler}
              />
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
              <label htmlFor="" className="form-label d-flex text-right">
                Password
              </label>
              <input
                type="password"
                className="form-control pwd"
                name="password"
                onChange={inputHandler}
              />
            </div>

            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
                <button className="btn btn-success w-100" onClick={addHandler}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Display the Bootstrap Alert based on showAlert state */}
        {showAlert && (
          <Container className="p-4">
            <Alert
              variant={
                alertMessage === "Login Successfull!!" ? "success" : "danger"
              }
              onClose={() => setShowAlert(false)}
              dismissible
            >
              {alertMessage}
            </Alert>
          </Container>
          
        )}
      </div>
    </div>
  );
};

export default Login;
