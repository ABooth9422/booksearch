import React from "react"
import {Link} from "react-router-dom"
import "./style.css"

function Nav(){
    return(
  <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <Link className="navbar-brand" to="/">Google Book Search</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/searched">Searched</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/saved">Saved</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}
export default Nav