import React from 'react'
//shorcut after ES7 extension is 'efc'
import PropTypes from 'prop-types'    //impt
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>

      {/* data-bs-theme="dark"*/}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutTextutil}</Link>
                {/* for 'Router' in place of href and a we used 'Link' syntax */}
                {/* 'a' and 'href' also work but page will be reloaded */}
              </li>

            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.prototypes = {
  title: PropTypes.string.isRequired,       // isRequired check that title is must
  aboutTextutil: PropTypes.string

}

// Navbar.defaultProps={
//     title:'set title here',
//     aboutTextutil:'About text here'
// };