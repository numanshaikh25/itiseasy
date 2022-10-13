import { useHistory, Link } from "react-router-dom"
import { isAuthenticated, logoutUser } from "../utils/auth"
import React from 'react'

const Header = (props) => {
  let history = useHistory()
  let [authenticated, setAuthenticated] = React.useState(isAuthenticated())
  const handleLogout = () => {
    logoutUser()
    setAuthenticated(false)
  }
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          {/* <h1 class="logo"><a href="index.html"></a></h1> */}
          {/* Uncomment below if you prefer to use an image logo */}
          <Link to="/" ><a sstyle={{ cursor: 'pointer' }} className="logo"><img src="/img/itiseasy.png" alt="logo" />itiseasy</a></Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/" ><a className="nav-link scrollto" style={{ cursor: 'pointer' }} id="main">Home</a></Link>
              </li>
              <li><Link to="/faq" ><a style={{ cursor: 'pointer' }}>FAQs</a></Link></li>
              <li className="dropdown"><a href="#"><span>About Us</span> <i className="bi bi-chevron-down dropdown-indicator" /></a>
                <ul>
                  <li><Link to="/about" ><a className="nav-link scrollto" style={{ cursor: 'pointer' }} id="about">Who we
                    are</a></Link></li>
                  <li><Link to="/career" ><a className="nav-link scrollto" style={{ cursor: 'pointer' }} id="career">Careers</a></Link></li>
                  <li><Link to="/security" ><a className="nav-link scrollto" style={{ cursor: 'pointer' }} id="security" >Security</a></Link></li>
                </ul>
              </li>
              <li><Link to="/forlawyer"><a className="nav-link scrollto" style={{ cursor: 'pointer' }} id="lawyer">For
                Lawyers</a></Link></li>
              <li><Link to="/blogs" ><a className="nav-link scrollto" style={{ cursor: 'pointer' }} id="blog">Blog</a></Link></li>
              <li><Link to="/contact" ><a className="nav-link scrollto" style={{ cursor: 'pointer' }} id="contact" >Contact
                Us</a></Link></li>
              <li><Link to="/term" ><a className="nav-link scrollto" style={{ cursor: 'pointer' }} id="contribute" >Contribute</a></Link></li>
              {
                authenticated ? 
                <a  style={{ cursor: 'pointer', marginLeft: '2em' }} id="logout-btn" className="btn-get-started" onClick={handleLogout}>Log
                Out</a>:
                <Link to="/auth/login" ><a style={{ cursor: 'pointer', marginLeft: '2em' }} id="login-btn" className="btn-get-started">Log In</a></Link>
              }
              
              {/* <Link to="/auth/login" ><a style={{ cursor: 'pointer', marginLeft: '2em' }} id="login-btn" className="btn-get-started">Log In</a></Link> */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
        </div>
      </header>{/* End Header */}
    </>
  )
}

export default Header;