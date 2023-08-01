import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from "react-router-dom"
import '../App.css'

const Sidebar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));
//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };
    const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));
    const navigate = useNavigate();
    const logout = () => {
    sessionStorage.removeItem("userToken");
    navigate("/")
    }
  return (
    // <div style={{width: "250px", height: "100vh", backgroundColor: "#808080"}}>
      <div className='container-fluid p-0'>

      <div className="row">
        {/* Sidebar Starts */}
       <div className="bg-dark col-auto col-md-2 p-0 min-vh-100 d-flex justify-content-between flex-column">
        <div>
        <br></br>
        <a className='text-decoration-none text-white  mt-5 mb-2'>
            <span className="fs-4">ICTAK-LearnerTracker</span>
        </a>
        <hr className='text-secondary'/>
        <br></br>
        
        <ul class="nav nav-pills flex-column">

        {userRole === 'Admin' && (
        <>
        <li class="nav-item text-white my-1">
                    <a class="nav-link text-white" aria-current="page" href="/ahome">
                        <i class="bi bi-people"></i>
                        <span className="ms-2">Users</span>
                    </a>
        </li>
        </>
        )}

        {userRole !== 'Placement Officer' && (
        <>
        <li class="nav-item text-white my-1">
                    <a class="nav-link text-white" aria-current="page" href="/thome">
                        <i class="bi bi-book"></i>
                        <span className="ms-2">Learners </span>
                    </a>
        </li>
        </>
        )}

        {userRole !== 'Training Head' && (
        <>
        <li class="nav-item text-white my-1">
                    <a class="nav-link text-white" aria-current="page" href="/phome">
                        <i class="bi bi-person-workspace"></i>
                        <span className="ms-2">Placement </span>
                    </a>
        </li>
        </>
        )}

        </ul>
        </div>

        <div>
        <ul className="nav nav-pills flex-column mb-5 mb-lg-0">
        <li className="nav-item text-white my-1  ">
                <a className="nav-link text-white" onClick={logout} href="/">
                <i class="bi bi-box-arrow-left"></i>   
                <span className="ms-2">Logout </span>
                </a>
        </li>
        </ul>
        </div>
        
       </div>

       {/* Sidebar Ends */}
       {/* Header Starts */}
       {/* <div className="col-auto  col-md-10 ps-0">
       <nav class="navbar navbar-expand-lg bg-success">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
                <a className="nav-link active text-white" onClick={logout} href="/"><ion-icon name="power-outline" size="large" color="white"></ion-icon></a>
        </li>
        </ul>
       </nav>
       </div> */}
       {/* Header Ends */}
      </div>
      </div>
    // </div>
  )
}

export default Sidebar