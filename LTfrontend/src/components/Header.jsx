import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ictlogo from "../ictlogo.png";
const Header = () => {

  const navigate = useNavigate();
  const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));
  const logout = () => {
    sessionStorage.removeItem("userToken");
    navigate("/")
  }

  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" style={{ backgroundColor: "#F8F9FA", height: "50px" }}>
          <a class="navbar-brand" href="#">ICTAK Learner Tracker</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {userRole === 'Admin' && (
                <>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/ahome">Users</a>
                  </li>
                </>
              )}
              {userRole !== 'Placement Officer' && (
                <>
                  <li class="nav-item">
                    <a class="nav-link active" href="/thome">Learners'-Dashboard</a>
                  </li>
                </>)}
              {userRole !== 'Training Head' && (
                <>
                  <li class="nav-item ">
                    <a class="nav-link active" href="/phome">Placement-Status</a>
                  </li>
                </>)}
              <li class="nav-item" style={{ marginLeft: '45em' }}>
                <a class="nav-link active" onClick={logout} href="/"><ion-icon name="power"></ion-icon></a>
              </li>

            </ul>
          </div>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg bg-success">
      {/* <a className='text-decoration-none text-white d-flex align-itemcenter ms-3 mt-2'>
            <span className="ms-1 fs-5">ICTAK-LearnerTracker</span>
      </a> */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item ">
                <a className="nav-link active text-white" onClick={logout} href="/"><ion-icon name="power-outline" size="large" color="white"></ion-icon></a>
      </li>
      </ul>
      </nav>
    </div>
  )
}

export default Header