import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-color">
            <div className="container">
            <div className="collapse navbar-collapse nav-position" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/"> sendreport <span className="sr-only"></span></a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        report
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="m1">m1</a></li>
                        <li><a class="dropdown-item" href="m2">m2</a></li>
                        <li><a class="dropdown-item" href="m3">m3</a></li>
                      </ul>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
  )
}

export default Navbar