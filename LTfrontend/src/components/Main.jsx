import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import '../App.css'

const Main = (props) => {
  return (
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col col-3 col-sm-3 col-md-3 col-lg-3">
    //       <Sidebar />
    //     </div>
    //     <div className="col col-9 col-sm-9 col-md-9 col-lg-9">
    //       {props.child}
    //     </div>
    //   </div>
    //   <Footer />
    // </div>

    <div className="main-container">
      <div> {/* Sidebar */}
        <Sidebar/>
      </div>
      <div className="main-content">
        <header> {/* Header */}
          <Header/>
        </header>
        <main> {/* Main Content */}
          {props.child}
        </main>
        <Footer>
          <Footer/>
        </Footer>
      </div>
    </div>
  )
}

export default Main