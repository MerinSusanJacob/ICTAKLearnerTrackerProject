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
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>

      <CDBSidebar textColor="#fff" backgroundColor="#000">
        {/* Header of the Sidebar */}
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="#" className="text-decoration-none" style={{ color: 'inherit' }}>
            <img src={ictlogo} alt="logo" style={{ height: '5vmin' }}/> ICTAK
          </a>
        </CDBSidebarHeader>

        {/*Main Content of Sidebar  */}
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

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

      </CDBSidebar>
    </div>
  )
}

export default Sidebar