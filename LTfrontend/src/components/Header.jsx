import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {

  const navigate = useNavigate();
  const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));
  const logout = () => {
    sessionStorage.removeItem("userToken");
    navigate("/")
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ICTAK Learner Tracker App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {userRole === 'admin' && (
                <>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/admin">Admin</a>
                  </li>
                </>
              )}
              {userRole != 'placementofficer' && (
                <>
                  <li class="nav-item">
                    <a class="nav-link active" href="/thome">Training Head</a>
                  </li>
                </>)}
              {userRole != 'traininghead' && (
                <>
                  <li class="nav-item">
                    <a class="nav-link active" href="/phome">Placement Officer</a>
                  </li>
                </>)}
              <li class="nav-item">
                <a class="nav-link active" onClick={logout} href="/">Logout</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header