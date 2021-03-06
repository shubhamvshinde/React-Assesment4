import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

          <Link className="nav-link" aria-current="page" to="/home">Home</Link>
          <Link className="nav-link" to="/student">Student</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar;