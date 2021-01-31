import React from 'react'
import {NavLink} from "react-router-dom"
import laptop from "./Untitled.png"
const Nav = () => {
 return (
  <header>
     <nav className="navbar navbar-expand-lg navbar-light d-flex ">
      <div className="logo">
     <NavLink className="navbar-brand" to="/" exact> <img src={laptop} alt=""/></NavLink>
      </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse navLinks" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto d-flex justify-content-between w-50">
      <li className="nav-item">
     <NavLink className="nav-link" to="/first" >First</NavLink>
      </li>
            <li className="nav-item">
     <NavLink className="nav-link" to="/second" >Second</NavLink>
      </li>
      <li className="nav-item">
     <NavLink className="nav-link" to="/exams" >Exams</NavLink>
      </li>

    </ul>
  </div>
</nav>
    
  </header>
 )
}

export default Nav
