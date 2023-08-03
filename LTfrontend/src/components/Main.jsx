import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import '../App.css'

const Main = (props) => {
    
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-2 col-sm-2 col-md-2 col-lg-2">
          <Sidebar/>
        </div>
        <div className="col col-10 col-sm-10 col-md-10 col-lg-10">
          {props.child}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Main