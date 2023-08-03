import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from "react-router-dom"
import '../App.css'


const Sidebar = () => {

    const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));
    const [userName, setUsername] = useState(sessionStorage.getItem("userName"));
    const navigate = useNavigate();
    const logout = () => {
    sessionStorage.removeItem("userToken");
    navigate("/")
    }

  return (
      <div className='container-fluid p-0'>
      <div className="row">
        
       <div className="bg-dark p-0 min-vh-100  d-flex  flex-column">
        <div className="bg-secondary">
        <br></br>
        <ul class="nav flex-column">
        <li class="nav-item text-white my-1">
                      <span className="bi bi-person-bounding-box fs-1"></span>  
        </li>
        <li class="nav-item text-white my-1">
                      <span className="ms-2 fs-5">{userName}</span>
        </li>
        <li class="nav-item text-white my-1">
                      <span className="ms-2">{userRole}</span>
        </li>
        </ul>
        </div>


        <div className="bg-success py-2">
        <a className='text-decoration-none text-white mb-2 py-5'>
            <span className="fs-4">ICTAK-LearnerTracker</span>
        </a>
        </div>


        <div>
        <br></br>
        <ul class="nav nav-pills flex-column">

        {userRole === 'Admin' && (
        <>
        <li class="nav-item text-white my-1">
                    <a class="nav-link text-white" aria-current="page" href="/ahome">
                        <i class="bi bi-people"></i>
                        <span className="ms-2 d-none d-sm-inline">Users</span>
                    </a>
        </li>
        </>
        )}

        {userRole !== 'Placement Officer' && (
        <>
        <li class="nav-item text-white my-1">
                    <a class="nav-link text-white" aria-current="page" href="/thome">
                        <i class="bi bi-book"></i>
                        <span className="ms-2 d-none d-sm-inline">Learners </span>
                    </a>
        </li>
        </>
        )}

        {userRole !== 'Training Head' && (
        <>
        <li class="nav-item text-white my-1">
                    <a class="nav-link text-white" aria-current="page" href="/phome">
                        <i class="bi bi-person-workspace"></i>
                        <span className="ms-2 d-none d-sm-inline">Placement </span>
                    </a>
        </li>
        </>
        )}

        </ul>
        </div>
        
        <div className="mt-auto">
        <ul className="nav nav-pills flex-column mb-5 mb-lg-4">
        <li className="nav-item text-white my-1">
                <hr className='text-secondary'/>
                <a className="nav-link text-white" onClick={logout} href="/">
                <i class="bi bi-box-arrow-left"></i>   
                <span className="ms-2 d-none d-sm-inline">Logout </span>
                </a>
        </li>
        </ul>
        </div>
        
       </div>

      </div>
      </div>
  )
}

export default Sidebar