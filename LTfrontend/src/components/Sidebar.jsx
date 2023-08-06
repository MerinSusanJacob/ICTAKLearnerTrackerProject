// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import { useNavigate } from "react-router-dom"
// import '../App.css'

// const Sidebar = () => {

//   const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));
//   const [userName, setUsername] = useState(sessionStorage.getItem("userName"));
//   const navigate = useNavigate();
//   const logout = () => {
//     sessionStorage.removeItem("userToken");
//     navigate("/")
//   }
//   return (
//     <div className='container-fluid p-0'>

//       <div className="row">
//         {/* Sidebar Starts */}
//         <div className="bg-dark col-auto col-md-2 p-0 min-vh-100 d-flex  flex-column position-fixed" style={{ zIndex: '1' }}>

//           <div className="bg-secondary">
//             <br></br>
//             <ul class="nav flex-column">
//               <li class="nav-item text-white my-1">
//                 <span className="bi bi-person-bounding-box fs-1"></span>
//               </li>
//               <li class="nav-item text-white my-1">
//                 <span className="ms-2 fs-5">{userName}</span>
//               </li>
//               <li class="nav-item text-white my-1">
//                 <span className="ms-2">{userRole}</span>
//               </li>
//             </ul>
//           </div>


//           <div className="bg-success py-2">
//             <a className='text-decoration-none text-white mb-2 py-5'>
//               <span className="fs-4">ICTAK-LearnerTracker</span>
//             </a>
//           </div>


//           <div>
//             <br></br>
//             <ul class="nav nav-pills flex-column">

//               {userRole === 'Admin' && (
//                 <>
//                   <li class="nav-item text-white my-1">
//                     <a class="nav-link text-white" aria-current="page" href="/ahome">
//                       <i class="bi bi-people"></i>
//                       <span className="ms-2 d-none d-sm-inline">Users</span>
//                     </a>
//                   </li>
//                 </>
//               )}

//               {userRole !== 'Placement Officer' && (
//                 <>
//                   <li class="nav-item text-white my-1">
//                     <a class="nav-link text-white" aria-current="page" href="/thome">
//                       <i class="bi bi-book"></i>
//                       <span className="ms-2 d-none d-sm-inline">Learners </span>
//                     </a>
//                   </li>
//                 </>
//               )}

//               {userRole !== 'Training Head' && (
//                 <>
//                   <li class="nav-item text-white my-1">
//                     <a class="nav-link text-white" aria-current="page" href="/phome">
//                       <i class="bi bi-person-workspace"></i>
//                       <span className="ms-2 d-none d-sm-inline">Placement </span>
//                     </a>
//                   </li>
//                 </>
//               )}

//             </ul>
//           </div>

//           <div className="mt-auto">
//             <ul className="nav nav-pills flex-column mb-5 mb-lg-4">
//               <li className="nav-item text-white my-1">
//                 {/* <hr className='text-secondary' /> */}
//                 <a className="nav-link text-white" onClick={logout} href="/">
//                   <i class="bi bi-box-arrow-left"></i>
//                   <span className="ms-2 d-none d-sm-inline">Logout </span>
//                 </a>
//               </li>
//             </ul> 
//           </div>

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Sidebar

import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom'
import "../App.css"
import ictlogo from "../ictlogo.png";

const Sidebar = () => {
  const [userRole, setUserrole] = useState(sessionStorage.getItem("userRole"));
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#000">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="#" className="text-decoration-none" style={{ color: 'inherit' }}>
          <img src={ictlogo} alt="logo"style={{height: '5vmin'}} /> ICTAK
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

          {/* {userRole === 'Admin' && (
          <>
            <NavLink exact to="/ahome" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
            </NavLink>
            </>
          )}

          {userRole !== 'Placement Officer' && (
          <>
            <NavLink exact to="/thome" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Learners</CDBSidebarMenuItem>
            </NavLink>
            </>
          )}

          {userRole !== 'Training Head' && (
            <>
            <NavLink exact to="/phome" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="briefcase">Placement</CDBSidebarMenuItem>
            </NavLink>
            </>
          )} */}


    <NavLink exact to="/ahome" activeClassName="activeClicked">
    {userRole === 'Admin' && (
    <>
      <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
    </>
    )}
    </NavLink>
  

    <NavLink exact to="/thome" activeClassName="activeClicked">
    {userRole !== 'Placement Officer' && (
    <>
      <CDBSidebarMenuItem icon="book">Learners</CDBSidebarMenuItem>
      </>
    )}
    </NavLink>
  
    <NavLink exact to="/phome" activeClassName="activeClicked">
    {userRole !== 'Training Head' && (
    <>
      <CDBSidebarMenuItem icon="briefcase">Placement</CDBSidebarMenuItem>
    </>
    )}
    </NavLink>
  


          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
                padding: '20px 5px',
              }}
          >
            ©ICTAK
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  )
}

export default Sidebar